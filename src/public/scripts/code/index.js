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
  });
})(this.jQuery);
