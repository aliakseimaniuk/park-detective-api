(function($) {
  'use strict';

  var categoryTmpl = `
      <input id="check-{{:index}}" type="checkbox" name="check" {{:checked}}>
      <label for="check-{{:index}}">{{:name}}</label>
    `;

  var amenityTmpl = `
    <input id="check-a-{{:index}}" type="checkbox" name="check">
    <label for="check-a-{{:index}}">{{:name}}</label>
  `;

  var parkTmpl = `
    <div class="col-lg-12 col-md-12">
      <div class="listing-item-container list-layout" data-marker-id="{{:index}}">
        <a href="{{:parkUrl}}" class="listing-item">

          <!-- Image -->
          <div class="listing-item-image">
            <img src="{{:imageUrl}}" alt="">
            <span class="tag">{{:category}}</span>
          </div>

          <!-- Content -->
          <div class="listing-item-content">

            <div class="listing-item-inner">
              <h3>{{:name}}</h3>
              <span>{{:address}}</span>
            </div>

            <span class="like-icon"></span>
          </div>
        </a>
      </div>
    </div>
  `;

  $(document).ready(function() {
    var searchText = $.url(window.location).param('text');
    var locationText = $.url(window.location).param('location');
    var category = $.url(window.location).param('category');

    $('#searchByTextInput').val(searchText);
    $('#autocomplete-input').val(locationText);

    var _graph = graphql(GRAPHQL_API_URL);
    var _query = _graph(`{
      parks {
        id
        name
        category
        amenities
        mainImageUrl
        address {
          streetAddress
          city
          zipCode
        }
        location {
          latitude
          longitude
        }
      }
      parkCategories {
        categories
      }
      parkAmenities {
        amenities
      }
    }`);

    _query().then(function(data) {
      initCategories(data.parkCategories.categories, category);
      initAmenities(data.parkAmenities.amenities);
      initParks(data.parks);

      var locations = [];
      for (var i = 0; i < data.parks.length; i++) {
        var p = data.parks[i];
        var l = [
          locationData(
            '/park/' + p.id,
            p.mainImageUrl,
            p.name,
            buildAddressString(p.address),
            5,
            1000,
          ),
          p.location.latitude,
          p.location.longitude,
          i + 1,
          '<i class="im im-icon-Tree-2"></i>',
        ];
        locations.push(l);
      }

      var map = document.getElementById('map');
      if (typeof map != 'undefined' && map != null) {
        google.maps.event.addDomListener(window, 'load', mainMap(locations));
      }
    });
  });

  function initCategories(categories, selectedCategory) {
    if (categories.indexOf(selectedCategory) >= 0) {
      var inputHtml =
        '<input id="check-0" type="checkbox" name="check" class="all"><label for="check-0">All Categories</label>';
      $('#categoriesFilterLeft').append(inputHtml);
    } else {
      var inputHtml =
        '<input id="check-0" type="checkbox" name="check" checked class="all"><label for="check-0">All Categories</label>';
      $('#categoriesFilterLeft').append(inputHtml);
    }

    var middle = Math.floor(categories.length / 2);

    for (var i = 0; i < middle; i++) {
      renderCategory(
        '#categoriesFilterLeft',
        selectedCategory,
        categories[i],
        i + 1,
      );
    }

    for (var i = middle; i < categories.length; i++) {
      renderCategory(
        '#categoriesFilterRight',
        selectedCategory,
        categories[i],
        i + 1,
      );
    }

    // "All" checkbox
    $('.checkboxes.categories input').on('change', function() {
      if ($(this).hasClass('all')) {
        $(this)
          .parents('.checkboxes')
          .find('input')
          .prop('checked', false);
        $(this).prop('checked', true);
      } else {
        $('.checkboxes input.all').prop('checked', false);
      }
    });
  }

  function renderCategory(selector, selectedCategory, item, index) {
    var model = {
      name: item,
      checked: item === selectedCategory ? 'checked' : '',
      index: index,
    };

    var tmpl = $.templates(categoryTmpl);
    var html = tmpl.render(model);
    $(selector).append(html);
  }

  function renderAmenity(selector, item, index) {
    var model = {
      name: item,
      index: index,
    };

    var tmpl = $.templates(amenityTmpl);
    var html = tmpl.render(model);
    $(selector).append(html);
  }

  function initAmenities(amenities) {
    var middle = Math.ceil(amenities.length / 2);

    for (var i = 0; i < middle; i++) {
      renderAmenity('#amenitiesFilterLeft', amenities[i], i + 1);
    }

    for (var i = middle; i < amenities.length; i++) {
      renderAmenity('#amenitiesFilterRight', amenities[i], i + 1);
    }
  }

  function initParks(parks) {
    for (var i = 0; i < parks.length; i++) {
      var item = parks[i];

      var model = {
        index: i + 1,
        parkUrl: '/park/' + item.id,
        imageUrl: item.mainImageUrl,
        category: item.category[0],
        name: item.name,
        address: buildAddressString(item.address),
      };

      var tmpl = $.templates(parkTmpl);
      var html = tmpl.render(model);
      $('#parkList').append(html);
    }
  }

  function buildAddressString(address) {
    var s = address.streetAddress + ', ' + address.city + ' ' + address.zipCode;
    return s;
  }

  // Infobox Output
  function locationData(
    locationURL,
    locationImg,
    locationTitle,
    locationAddress,
    locationRating,
    locationRatingCounter,
  ) {
    return (
      '' +
      '<a href="' +
      locationURL +
      '" class="listing-img-container">' +
      '<div class="infoBox-close"><i class="fa fa-times"></i></div>' +
      '<img src="' +
      locationImg +
      '" alt="">' +
      '<div class="listing-item-content">' +
      '<h3>' +
      locationTitle +
      '</h3>' +
      '<span>' +
      locationAddress +
      '</span>' +
      '</div>' +
      '</a>'
    );
  }

  function mainMap(locations) {
    // Locations
    // ----------------------------------------------- //
    var ib = new InfoBox();

    // Chosen Rating Type
    google.maps.event.addListener(ib, 'domready', function() {
      if ((infoBox_ratingType = 'numerical-rating')) {
        numericalRating('.infoBox .' + infoBox_ratingType + '');
      }
      if ((infoBox_ratingType = 'star-rating')) {
        starRating('.infoBox .' + infoBox_ratingType + '');
      }
    });

    // Map Attributes
    // ----------------------------------------------- //

    var mapZoomAttr = $('#map').attr('data-map-zoom');
    var mapScrollAttr = $('#map').attr('data-map-scroll');

    if (typeof mapZoomAttr !== typeof undefined && mapZoomAttr !== false) {
      var zoomLevel = parseInt(mapZoomAttr);
    } else {
      var zoomLevel = 5;
    }

    if (typeof mapScrollAttr !== typeof undefined && mapScrollAttr !== false) {
      var scrollEnabled = parseInt(mapScrollAttr);
    } else {
      var scrollEnabled = false;
    }

    // Main Map
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoomLevel,
      scrollwheel: scrollEnabled,
      center: new google.maps.LatLng(39.15, -75.54),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      panControl: false,
      navigationControl: false,
      streetViewControl: false,
      gestureHandling: 'cooperative',

      // Google Map Style
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#747474' }, { lightness: '23' }],
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.fill',
          stylers: [{ color: '#f38eb0' }],
        },
        {
          featureType: 'poi.government',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ced7db' }],
        },
        {
          featureType: 'poi.medical',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffa5a8' }],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{ color: '#c7e5c8' }],
        },
        {
          featureType: 'poi.place_of_worship',
          elementType: 'geometry.fill',
          stylers: [{ color: '#d6cbc7' }],
        },
        {
          featureType: 'poi.school',
          elementType: 'geometry.fill',
          stylers: [{ color: '#c4c9e8' }],
        },
        {
          featureType: 'poi.sports_complex',
          elementType: 'geometry.fill',
          stylers: [{ color: '#b1eaf1' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ lightness: '100' }],
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }, { lightness: '100' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffd4a5' }],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffe9d2' }],
        },
        {
          featureType: 'road.local',
          elementType: 'all',
          stylers: [{ visibility: 'simplified' }],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [{ weight: '3.00' }],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry.stroke',
          stylers: [{ weight: '0.30' }],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text',
          stylers: [{ visibility: 'on' }],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#747474' }, { lightness: '36' }],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#e9e5dc' }, { lightness: '30' }],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{ visibility: 'on' }, { lightness: '100' }],
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [{ color: '#d2e7f7' }],
        },
      ],
    });

    // Marker highlighting when hovering listing item
    $('.listing-item-container').on('mouseover', function() {
      var listingAttr = $(this).data('marker-id');

      if (listingAttr !== undefined) {
        var listing_id = $(this).data('marker-id') - 1;
        var marker_div = allMarkers[listing_id].div;

        $(marker_div).addClass('clicked');

        $(this).on('mouseout', function() {
          if ($(marker_div).is(':not(.infoBox-opened)')) {
            $(marker_div).removeClass('clicked');
          }
        });
      }
    });

    // Infobox
    // ----------------------------------------------- //

    var boxText = document.createElement('div');
    boxText.className = 'map-box';

    var currentInfobox;

    var boxOptions = {
      content: boxText,
      disableAutoPan: false,
      alignBottom: true,
      maxWidth: 0,
      pixelOffset: new google.maps.Size(-134, -55),
      zIndex: null,
      boxStyle: {
        width: '270px',
      },
      closeBoxMargin: '0',
      closeBoxURL: '',
      infoBoxClearance: new google.maps.Size(25, 25),
      isHidden: false,
      pane: 'floatPane',
      enableEventPropagation: false,
    };

    var markerCluster, overlay, i;
    var allMarkers = [];

    var clusterStyles = [
      {
        textColor: 'white',
        url: '',
        height: 50,
        width: 50,
      },
    ];

    var markerIco;
    for (i = 0; i < locations.length; i++) {
      markerIco = locations[i][4];

      var overlaypositions = new google.maps.LatLng(
          locations[i][1],
          locations[i][2],
        ),
        overlay = new CustomMarker(
          overlaypositions,
          map,
          {
            marker_id: i,
          },
          markerIco,
        );

      allMarkers.push(overlay);

      google.maps.event.addDomListener(
        overlay,
        'click',
        (function(overlay, i) {
          return function() {
            ib.setOptions(boxOptions);
            boxText.innerHTML = locations[i][0];
            ib.close();
            ib.open(map, overlay);
            currentInfobox = locations[i][3];
            // var latLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
            // map.panTo(latLng);
            // map.panBy(0,-90);

            google.maps.event.addListener(ib, 'domready', function() {
              $('.infoBox-close').click(function(e) {
                e.preventDefault();
                ib.close();
                $('.map-marker-container').removeClass(
                  'clicked infoBox-opened',
                );
              });
            });
          };
        })(overlay, i),
      );
    }

    // Marker Clusterer Init
    // ----------------------------------------------- //

    var options = {
      imagePath: 'images/',
      styles: clusterStyles,
      minClusterSize: 2,
    };

    markerCluster = new MarkerClusterer(map, allMarkers, options);

    google.maps.event.addDomListener(window, 'resize', function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(center);
    });

    // Custom User Interface Elements
    // ----------------------------------------------- //

    // Custom Zoom-In and Zoom-Out Buttons
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    function ZoomControl(controlDiv, map) {
      zoomControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(
        zoomControlDiv,
      );
      // Creating divs & styles for custom zoom control
      controlDiv.style.padding = '5px';
      controlDiv.className = 'zoomControlWrapper';

      // Set CSS for the control wrapper
      var controlWrapper = document.createElement('div');
      controlDiv.appendChild(controlWrapper);

      // Set CSS for the zoomIn
      var zoomInButton = document.createElement('div');
      zoomInButton.className = 'custom-zoom-in';
      controlWrapper.appendChild(zoomInButton);

      // Set CSS for the zoomOut
      var zoomOutButton = document.createElement('div');
      zoomOutButton.className = 'custom-zoom-out';
      controlWrapper.appendChild(zoomOutButton);

      // Setup the click event listener - zoomIn
      google.maps.event.addDomListener(zoomInButton, 'click', function() {
        map.setZoom(map.getZoom() + 1);
      });

      // Setup the click event listener - zoomOut
      google.maps.event.addDomListener(zoomOutButton, 'click', function() {
        map.setZoom(map.getZoom() - 1);
      });
    }

    // Scroll enabling button
    var scrollEnabling = $('#scrollEnabling');

    $(scrollEnabling).click(function(e) {
      e.preventDefault();
      $(this).toggleClass('enabled');

      if ($(this).is('.enabled')) {
        map.setOptions({ scrollwheel: true });
      } else {
        map.setOptions({ scrollwheel: false });
      }
    });

    // Geo Location Button
    $('#geoLocation, .input-with-icon.location a').click(function(e) {
      e.preventDefault();
      geolocate();
    });

    function geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude,
          );
          map.setCenter(pos);
          map.setZoom(12);
        });
      }
    }
  }
})(this.jQuery);
