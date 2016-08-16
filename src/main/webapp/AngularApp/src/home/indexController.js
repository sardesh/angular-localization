/**
 * Created by sardesh on 8/5/16.
 */
(function() {
    "use strict";
    angular.module('myApp')
        .controller('IndexController', IndexController);

    /* @ngInject */
    function IndexController(locale, $window) {
        var vm = this;
        var lang = $window.navigator.languages || $window.navigator.userLanguage;
        //custom locale
        locale.setLocale(lang[0]);
    }
})();
