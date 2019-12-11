(function () {
	'use strict';

	angular.module('coursera-test', [])

	.controller('NameCalculatorController', ['$scope', nameCalculatorController])

	.controller('DIController', ['$scope', '$filter', diController]);

	function nameCalculatorController($scope) {
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
	}


	function diController($scope, $filter){
		$scope.diName = 'XPEHb';

		$scope.upper = function () {
			var upCase = $filter('uppercase');
			$scope.diName = upCase($scope.diName);
		}
	}


})();
