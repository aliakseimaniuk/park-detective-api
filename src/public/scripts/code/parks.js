(function($) {
  'use strict';

  $(document).ready(function() {
    var searchText = $.url(window.location).param('text');
    var locationText = $.url(window.location).param('location');
    var category = $.url(window.location).param('category');

    $('#searchByTextInput').val(searchText);
    $('#autocomplete-input').val(locationText);
  });

})(this.jQuery);
