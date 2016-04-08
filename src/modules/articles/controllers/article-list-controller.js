'use strict';

(function (angular) {

  angular
    .module('wui.workshops.tdd.articles')
    .controller('ArticleListController', ArticleListController);

  ArticleListController.$inject = [];

  function ArticleListController() {
    var vm = this; // jshint ignore:line

    vm.articles = [];
  }

})(angular);
