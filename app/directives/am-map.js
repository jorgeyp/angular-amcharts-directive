(function() {

angular.module('amMaps', [])
.directive('amMap', function($http) {
  function link(scope, element, attrs) {

    scope.mapId = attrs.id;

    var chart = false;
    var initChart = function(config) {
      if (chart) chart.destroy();

      chart = AmCharts.makeChart(scope.mapId, config);
    };

    $http.get('data/map.json').success(function(data) {
      console.log(data);
      initChart(data);
    }).catch(function(data) {
      console.log('No JSON data found');
    });
  }
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/my-map.html',
    link: link
  };
})
;
})();
