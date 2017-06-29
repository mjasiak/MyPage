var pageController = angular.module("myApp").controller("pageController",["$scope",function($scope){
    $scope.hello = "Message from controller!";
    $scope.czas = new Date().toLocaleString();
}]);