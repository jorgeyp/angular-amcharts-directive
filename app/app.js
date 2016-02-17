  // 'use strict';
  var app =  angular.module('amMaps', []);

 app.directive('amMap', function($http) {
      console.log(1);

      function link(scope, element, attrs) {
        console.log(2);
        scope.mapId = attrs.id;

        var chart = false;
        // var initChart = function(config) {
        var initChart = function() {
          if (chart) chart.destroy();
          scope.$watch('config', function(config) {
            if (config) {
              console.log(config);
              chart = AmCharts.makeChart(scope.mapId, config);
            }
          });
          // var config = scope.config || {};
          // chart = AmCharts.makeChart(scope.mapId, config);
        };
        initChart();
        // $http.get('data/map.json').success(function(data) {
        //   console.log(data);
        //   initChart(data);
        // }).catch(function(data) {
        //   console.log('No JSON data found');
        // });
      }
      return {
        restrict: 'E',
        replace: true,
        scope: { config: '=config' },
        // transclude: true,
        template: '<div style="width: 640px; height: 400px;"></div>',
        link: link
      };
    })
    // .controller('MapCtrl', ['$scope', function($scope) {
    //   console.log(3);
    //   $scope.config = {
    //     "type": "map",
    //     "theme": "none",
    //     "projection":"winkel3",
    //
    //     "dataProvider": {
    //       "map": "worldLow",
    //       "getAreasFromMap": true
    //     },
    //     "areasSettings": {
    //       "autoZoom": true,
    //       "selectedColor": "#CC0000"
    //     },
    //     "smallMap": {},
    //     "export": {
    //       "enabled": true,
    //       "position": "bottom-right"
    //     }
    //   };
    // }])
  ;
