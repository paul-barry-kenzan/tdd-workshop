'use strict';

(function (angular) {

  angular
    .module('wui.workshops.tdd.articles')
    .controller('ArticleListController', ArticleListController);

  ArticleListController.$inject = ['ArticleService'];

  function ArticleListController(ArticleService) {
    var vm = this; // jshint ignore:line

    vm.articles = [];

    function activate() {
      ArticleService.getArticles();
    }

    activate();

  }

})(angular);
