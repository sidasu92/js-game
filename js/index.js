var classApp = angular.module('classApp', []);

classApp.controller('classCtrl', function ($scope) {

	$scope.btnNo = Math.floor(Math.random()*3);
	console.log($scope.btnNo);
	$scope.isActive1 = false;
	$scope.isActive2 = false;
	$scope.isActive3 = false;
	$scope.isActive4 = false;
	$scope.number = 5;
	$scope.activeButton1 = function() {
		$scope.isActive1 = !$scope.isActive1;
    $scope.isActive2 = !$scope.isActive2;
  }
	$scope.activeButton2 = function() {
		$scope.isActive2 = !$scope.isActive2;
    $scope.isActive3 = !$scope.isActive3;
  }
	$scope.activeButton3 = function() {
		$scope.isActive3 = !$scope.isActive3;
    $scope.isActive4 = !$scope.isActive4;
  }
	$scope.activeButton4 = function() {
		$scope.isActive4 = !$scope.isActive4;
    $scope.isActive1 = !$scope.isActive1;
  }

	$scope.markers = [];
	for (var i = 0; i < 4; ++i) {
	    $scope.markers[i] = false;
	}
	$scope.activeButton = function() {
		// const activeTag = isActive;
		// let currentActiveTag = activeTag;

	};

});
