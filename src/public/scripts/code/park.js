(function($) {
  'use strict';

  $(document).ready(function() {
    var location = {
      lng: $('#singleListingMap').data('longitude'),
      lat: $('#singleListingMap').data('latitude'),
    };

    var _graph = graphql(GRAPHQL_API_URL);
    var _busStopsQuery = _graph(
      `query ($latitude: Float!, $longitude: Float!) {
      busStops(latitude: $latitude, longitude: $longitude) {
        stopName
        lat
        lon
      }
    }`,
      {
        latitude: location.lat,
        longitude: location.lng,
      },
    );

    var busStopTmpl = `
      <li>{{:name}}</li>`;

    _busStopsQuery.then(function(data) {
      for (var i = 0; i < data.busStops.length; i += 1) {
        var model = {
          name: data.busStops[i].stopName,
        };

        var tmpl = $.templates(busStopTmpl);
        var html = tmpl.render(model);
        $('#busStopsList').append(html);
      }
    });
  });
})(this.jQuery);
