(function() {
    let classApp = angular.module('classApp', []);

    classApp.controller('GameController', function($scope) {
    	$scope.areAllOn = false;
        $scope.myNumber = 0;
        $scope.myarray = new Array();
        $scope.toggleArray = new Array();
        $scope.inputGiven = function(myVal) {
            $scope.myarray = new Array();
            $scope.toggleArray = new Array();
            for (let i = 0; i < myVal; i++) {
                $scope.myarray[i] = i;
                $scope.toggleArray[i] = false;
            }
        }

        $scope.btnNum = Math.floor(Math.random() * 9);
        $scope.areAllOn = false;
        $scope.toggleButton = function(curBtn) {
            $scope.toggleArray[curBtn] = !$scope.toggleArray[curBtn];
            $scope.toggleArray[$scope.btnNum] = !$scope.toggleArray[$scope.btnNum];
            $scope.areAllOn = checkIfAllAreTrue();
        };

        function checkIfAllAreTrue() {
            for (let i = 0; i < $scope.toggleArray.length; i++)
                if (!$scope.toggleArray[i]) return false;
            return true;
        }
    });
})();