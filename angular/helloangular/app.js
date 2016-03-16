var app = angular.module('app', []);
app.controller('theController', ['$scope',
    function($scope) {
        $scope.greeting = { text: "Hello Angular" };
        $scope.handleClick = function() {
            document.getElementById("lbl").innerHTML="Hello angular button-click";
        }
    }]);
