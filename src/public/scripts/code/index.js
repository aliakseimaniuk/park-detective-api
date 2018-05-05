(function($) {
  'use strict';

  $(document).ready(function() {
    var _graph = graphql(GRAPHQL_API_URL);
    var _parkCategories = _graph(`{
      parkCategories {
        categories
      }
    }`);

    _parkCategories().then(function(data) {
      var categoriesSelect = $('#parkCategoriesSelect');
      for (var i = 0; i < data.parkCategories.categories.length; i++) {
        var item = data.parkCategories.categories[i];
        categoriesSelect.append(
          $('<option />')
            .val(item)
            .text(item),
        );
      }

      for (var i = 0; i < data.parkCategories.categories.length; i++) {
        var item = data.parkCategories.categories[i];
        //TODO: Retrieve amount of parks per category from server.
        var model = {
          href: '/parks?category=' + item,
          imageUrl: CATEGORY_IMAGES[item],
          title: item,
          countOfItem: Math.floor(Math.random() * 100) + 2,
        };

        var tmpl = $.templates(popularCategoryTmpl);
        var html = tmpl.render(model);
        $('#categoryCarousel').append(html);
      }

      initCategoriesSlick();
      $(categoriesSelect).trigger('chosen:updated');
    });

    $('#searchButton').click(function() {
      var params = {};
      var searchText = $('#searchTextInput').val();
      if (searchText) {
        params.text = searchText;
      }

      var locationText = $('#autocomplete-input').val();
      if (locationText) {
        params.location = locationText;
      }

      var category = $('#parkCategoriesSelect')
        .chosen()
        .val();
      if (category) {
        params.category = category;
      }

      var query = $.param(params);
      var pathToRedirect = '/parks?' + query;
      window.location.href = pathToRedirect;
    });

    var popularCategoryTmpl = `
      <div class="fw-carousel-item">
        <div class="category-box-container">
          <a href="{{:href}}" class="category-box" data-background-image="{{:imageUrl}}">
            <div class="category-box-content">
              <h3>{{:title}}</h3>
              <span>{{:countOfItem}} Parks</span>
            </div>
            <span class="category-box-btn">Browse</span>
          </a>
        </div>
      </div>
    `;

    function initCategoriesSlick() {
      $('.fullwidth-slick-carousel').slick({
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 3,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1441,
            settings: {
              centerPadding: '10%',
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              centerPadding: '10px',
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: '10px',
              slidesToShow: 1,
            },
          },
        ],
      });

      $('.category-box').each(function() {
        // add a photo container
        $(this).append('<div class="category-box-background"></div>');

        // set up a background image for each tile based on data-background-image attribute
        $(this)
          .children('.category-box-background')
          .css({
            'background-image':
              'url(' + $(this).attr('data-background-image') + ')',
          });
      });
    }
  });
})(this.jQuery);
