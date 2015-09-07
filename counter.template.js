angular.module('eha.counter.template', ['templates/counter.template.tpl.html']);

angular.module("templates/counter.template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/counter.template.tpl.html",
    "<div class=\"input-group\">\n" +
    "  <span class=\"input-group-btn\">\n" +
    "    <button\n" +
    "      class=\"btn btn-warning eha-counter-btn\"\n" +
    "      type=\"button\"\n" +
    "      ng-click=\"count = decrementTouch(count)\"\n" +
    "    >\n" +
    "      <i class=\"fa fa-minus\"></i>\n" +
    "    </button>\n" +
    "  </span>\n" +
    "\n" +
    "  <input\n" +
    "    type=\"number\"\n" +
    "    min=\"0\"\n" +
    "    class=\"form-control input-lg eha-counter-input\"\n" +
    "    ng-change=\"change\"\n" +
    "    ng-model=\"count\"\n" +
    "    required\n" +
    "  />\n" +
    "\n" +
    "  <span class=\"input-group-btn\">\n" +
    "    <button\n" +
    "      class=\"btn btn-info eha-counter-btn\"\n" +
    "      type=\"button\"\n" +
    "      ng-click=\"count = incrementTouch(count)\"\n" +
    "    >\n" +
    "      <i class=\"fa fa-plus\"></i>\n" +
    "    </button>\n" +
    "  </span>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

;(function () {
  'use strict'
  /**
   * @ngdoc directive
   * @name ehaCounter
   * @module eha.counter
   */
  var ngModule = angular.module('eha.counter.directive', [
  ])

  ngModule.directive('ehaCounter', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/templates/counter.html',
      scope: {
        count: '=bind',
        change: '=onchange',
        name: '=name'
      },
      link: function (scope, element) {
        var counterBtnList = element.find('button')
        var minusBtnElem = counterBtnList.eq(0)
        var plusBtnElem = counterBtnList.eq(1)

        function isInvalid (value) {
          return (isNaN(value) || value === '' || value < 1)
        }
        scope.incrementTouch = function (count) {
          return isInvalid(count) ? 1 : (parseInt(count, 10) + 1)
        }

        scope.decrementTouch = function (count) {
          return isInvalid(count) ? 0 : (parseInt(count, 10) - 1)
        }

        element.on('$destroy', function () {
          plusBtnElem.off('click')
          minusBtnElem.off('click')
        })
      }
    }
  })

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule
  }
})()

;(function() {
  'use strict';

  var ngModule = angular.module('eha.counter', [
    'eha.counter.directive',
    'eha.counter.template'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();
