var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
        templateUrl : "./Views/home.html"
    })
    .when('/about',{
        templateUrl : "./Views/about.html"
    })
    .when('/contact',{
        templateUrl : "./Views/contact.html"
    });

    // $locationProvider.html5Mode(true);
});