var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl : "./Views/home.html"
    })
    .when("/about",{
        templateUrl : "./Views/about.html"
    })
    .when("/contact",{
        templateUrl : "./Views/contact.html"
    });
});