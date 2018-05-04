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
})(this.jQuery);
