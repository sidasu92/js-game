(function() {
    let classApp = angular.module('classApp', []);
    classApp.controller('GameController', function($scope) {
        //  to hide and show various div tags
    	$scope.areAllOn = false;
        //  to show buttons array.length times
        $scope.myarray = new Array();
        //  array to hold button's active/inactive; holds bool true false
        $scope.toggleArray = new Array();
        $scope.btnNum = 0;

        //  method to initialise the arrays and impart randomness for one load
        $scope.inputGiven = function(myVal) {
            $scope.myarray = new Array();
            $scope.toggleArray = new Array();
            //  init to integer and false
            for (let i = 0; i < myVal; i++) {
                $scope.myarray[i] = i;
                $scope.toggleArray[i] = false;
            }
            $scope.areAllOn = false;
            //  to make button association random everytime n# of buttons is inputted
            $scope.btnNum = Math.floor(Math.random() * myVal);
        }   

        //  method to perform toggling
        $scope.toggleButton = function(curBtn) {
            let bindedToBtn = (curBtn + $scope.btnNum) % $scope.toggleArray.length;
            //  cover base case
            if($scope.toggleArray.length === 1) {
                $scope.toggleArray[curBtn] = !$scope.toggleArray[curBtn];
            } else {
                //  so that it reflects changes and not gets associated 
                //  with itself due to randomnsess
                if(bindedToBtn === curBtn) {
                    bindedToBtn = (bindedToBtn+1) % $scope.toggleArray.length;
                }
                $scope.toggleArray[curBtn] = !$scope.toggleArray[curBtn];
                $scope.toggleArray[bindedToBtn] = !$scope.toggleArray[bindedToBtn];
            }
            $scope.areAllOn = checkIfAllAreTrue();
        };

        //  to show congratulations screen if all are buttons active or OFF
        function checkIfAllAreTrue() {
            for (let i = 0; i < $scope.toggleArray.length; i++)
                if (!$scope.toggleArray[i]) return false;
            return true;
        }
    });
})();