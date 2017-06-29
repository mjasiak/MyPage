var pageController = angular.module("myApp").controller("pageController",["$scope",function($scope){
    $scope.czas = new Date().toLocaleString();
}]);