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
})(this.jQuery);
