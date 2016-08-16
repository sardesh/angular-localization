/**
 * Created by sardesh on 7/16/16.
 */
(function() {
    'use strict';
    angular.module('myApp').config(config);
    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$ocLazyLoadProvider',
        'IdleProvider'
    ];


    function config($stateProvider,
                    $urlRouterProvider,
                    $ocLazyLoadProvider,
                    IdleProvider) {
        // Configure Idle settings
        IdleProvider.idle(5); // in seconds
        IdleProvider.timeout(120); // in seconds
        $urlRouterProvider.otherwise("home");

        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: true
        });
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/AngularApp/src/home/view/home.html",
                controller: 'IndexController',
                controllerAs : 'vm'
            });
    }
}());

