angular
.module('ushar', ['ngRoute', 'ngMaterial'])
.config(['$routeProvider', ($routeProvider) =>
{
    $routeProvider
        .when('/home', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl'
        })            
        .otherwise({ redirectTo: '/home' });
}]);