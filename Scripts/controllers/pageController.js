var pageController = angular.module("myApp").controller("pageController",["$scope",function($scope){
    $scope.hello = "Witaj świecie!";
    $scope.czas = new Date().toLocaleString();
}]);