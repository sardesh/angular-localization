/**
 * Created by sardesh on 7/16/16.
 */
'use strict';

angular.module('myApp', [
    'ui.router',                    // Routing
    'oc.lazyLoad',                  // ocLazyLoad
    'ui.bootstrap',                 // Ui Bootstrap
    'pascalprecht.translate',       // Angular Translate
    'ngIdle',                       // Idle timer
    'ngSanitize',                   // ngSanitize
    'ngStorage',
    'ngCookies',
    'ui.router.state',
    'ncy-angular-breadcrumb',
    'ngLocalize',
    'ngLocalize.Config'
]).
value('localeConf', {
    basePath: '/get-locale',
    defaultLocale: 'en-US',
    sharedDictionary: 'common',
    fileExtension: '',
    persistSelection: true,
    cookieName: 'COOKIE_LOCALE_LANG',
    observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
    delimiter: '::',
    validTokens: new RegExp('^[\\w\\.-]+\\.[\\w\\s\\.-]+\\w(:.*)?$')
}).
    value('localeSupported', [
        'en-US',
        'de-DE',
        'de'
    ])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push([
            '$rootScope',
            '$q',
            '$location',
            '$localStorage',
            '$injector',
            '$window',
            function($rootScope, $q, $location, $localStorage, $injector, $window) {
                return {
                    'request': function(config) {
                        $rootScope.isViewLoading = true;
                        config.headers = config.headers || {};
                        if ($localStorage.auth_token) {
                            config.headers.token = $localStorage.auth_token;
                        }
                        if ($rootScope.currentTenant != undefined) {
                            config.headers.currentTenant = $rootScope.currentTenant.id;
                        };
                        return config;
                    },
                    'responseError': function(response) {
                        $rootScope.isViewLoading = false;
                        if (response.status === 401) {
                            delete $localStorage.auth_token;
                            $rootScope.isLoggedIn = false;
                            toastr.error("Token is expired! Please login again.", '', {
                                "positionClass": "toast-bottom-left"
                            });
                            document.cookie = 'auth_token' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                            $window.location.href = '/';
                        } else if (response.status === 404) {
                            $location.path('/');
                        }
                        return $q.reject(response);
                    },
                    'response': function(response) {
                        $rootScope.isViewLoading = false;
                        if (response.data.redirect_url) {
                            toastr.error(response.data.message, '', {
                                "positionClass": "toast-bottom-left"
                            });
                            $location.path(response.data.redirect_url);
                            return $q.reject(response);
                        }
                        return response;
                    }
                };
            }
        ]);
    }])
    .config(['$httpProvider', function($httpProvider) {
        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }])
    .run([
        '$rootScope',
        '$state',
        '$window',
        '$location',
        '$cookies',
        function ($rootScope, $state, $window, $location, $cookies) {
            $rootScope.$state = $state;
            $rootScope.isViewLoading = true;
            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    $rootScope.isViewLoading = true;
                }
            );
            $rootScope.$on('$stateChangeSuccess', function () {
                $rootScope.isViewLoading = false;
                $window.scrollTo(0, 0);
            });
            $rootScope.$on('$stateChangeError', function () {
                $rootScope.isViewLoading = false;
            });
        }
    ]);