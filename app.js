(function () {
	'use strict';

	angular.module('coursera-test', [])

	.controller('NameCalculatorController', NameCalculatorController)

	.controller('DIController', DIController)

	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];
	NameCalculatorController.$inject = ['$scope'];
	DIController.$inject = ['$scope', '$filter'];

	function NameCalculatorController($scope) {
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

	function DIController($scope, $filter){
		$scope.diName = 'xpeHb';

		$scope.upper = function () {
			var upCase = $filter('uppercase');
			$scope.diName = upCase($scope.diName);
		}
	}

	function MsgController($scope) {
		$scope.yaName = "DumbAss";
		$scope.stateOfBeing = 'hungry';
		$scope.sayMessage = function () {
			return `${$scope.yaName} likes to eat healthy snacks at night!`;
		}

		$scope.feedDumbAss = function () {
			$scope.stateOfBeing = $scope.stateOfBeing=="hungry" ? "fed" : "hungry";
		}
	}


})();
