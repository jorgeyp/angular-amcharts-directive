(function() {
  angular.module('myApp', ['amCharts'])
    .controller('MapCtrl', ['$scope', function($scope) {
      $scope.config = {
        "type": "map",
        "theme": "none",
        "projection": "winkel3",

        "dataProvider": {
          "map": "worldLow",
          "getAreasFromMap": true
        },
        "areasSettings": {
          "autoZoom": true,
          "selectedColor": "#CC0000"
        },
        "smallMap": {},
        "export": {
          "enabled": true,
          "position": "bottom-right"
        }
      };
    }])
    .controller('ChartCtrl', ['$scope', function($scope) {
      $scope.config = {
        type: "serial",
        dataProvider: [{
          "year": 2005,
          "income": 23.5
        }, {
          "year": 2006,
          "income": 26.2
        }, {
          "year": 2007,
          "income": 30.1
        }],
        categoryField: "year",
        rotate: true,

        categoryAxis: {
          gridPosition: "start",
          axisColor: "#DADADA"
        },
        valueAxes: [{
          axisAlpha: 0.2
        }],
        graphs: [{
          type: "column",
          title: "Income",
          valueField: "income",
          lineAlpha: 0,
          fillColors: "#ADD981",
          fillAlphas: 0.8,
          balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
        }]
      };
    }]);
})();
