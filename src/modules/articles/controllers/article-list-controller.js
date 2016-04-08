'use strict';

(function (angular) {

  angular
    .module('wui.workshops.tdd.articles')
    .controller('ArticleListController', ArticleListController);

  ArticleListController.$inject = ['$log', 'ArticleService'];

  function ArticleListController($log, ArticleService) {
    var vm = this; // jshint ignore:line

    vm.articles = [];

    function activate() {
      ArticleService.getArticles()
        .catch(function (err) {
          $log.error(err);
        });
    }

    activate();

  }

})(angular);
