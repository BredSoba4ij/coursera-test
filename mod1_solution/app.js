(function () {
	'use strict';

	angular.module('LunchChecker', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.items = "";
		$scope.message = "";

		$scope.checkItems = function () {
			let items = getLunchItems($scope.items);

			if(isItemsEmpty()){
				$scope.message = "Please enter data first";
			} else if(items.length > 3) {
				$scope.message = 'Too much!';
			} else {
				$scope.message = 'Enjoy!';
			}

		}

		$scope.clearMessage = function () {
			if(isItemsEmpty()){
				$scope.message = "";
			}
		}

		function isItemsEmpty() {
			return $scope.items == "";
		}


	}

	function getLunchItems(str) {
		let items = str.split(',');
		let result = items.filter(item => item);

		return result;
	}

	


})();