'use strict';

(function (angular) {

  angular
    .module('wui.workshops.tdd.articles')
    .service('ArticleService', ArticleService);

  ArticleService.$inject = ['$http'];

  function ArticleService($http) {

    this.getArticles = function () {
      return $http.get('path/to/file.json');
    }

  }

})(angular);

