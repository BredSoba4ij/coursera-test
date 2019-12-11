(function () {
	'use strict';

	// import {angular} from './angular';

	angular.module('coursera-test', [])

	.controller('NameCalculatorController',  function ($scope) {		//['', function(){}])
		$scope.name = "";
		$scope.totalValue = 0;

		$scope.displayNumeric = function () {
			var totalNameValue = calculateNumericForString($scope.name);
			$scope.totalValue = totalNameValue;

		}

		function calculateNumericForString(str) {
			var totalStringValue = 0;
			for (var i = 0; i < str.length; i++) {
				totalStringValue += str.charCodeAt(i);
			}
			return totalStringValue;
		}

	});


})();
