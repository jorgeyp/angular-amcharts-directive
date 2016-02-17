  // 'use strict';
  (function() {
    angular.module('amCharts', [])
      .directive('chart', function($http) {
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
          scope: {
            config: '=config'
          },
          template: '<div style="width: 640px; height: 400px;"></div>',
          link: link
        };
      });
  })();
