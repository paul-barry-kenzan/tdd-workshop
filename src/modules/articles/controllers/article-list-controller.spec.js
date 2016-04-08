'use strict';

describe('Article List Controller', function () {

  var $rootScope;
  var $controller;
  var vm;

  var ArticleService;

  beforeEach(module('wui.workshops.tdd.articles'));

  beforeEach(module(function ($provide) {

    $provide.service('ArticleService', function(){
      this.getArticles = sinon.spy();
    });

  }));

  beforeEach(inject(function (_$rootScope_, _$controller_, _ArticleService_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;

    ArticleService = _ArticleService_;

    vm = $controller('ArticleListController');
  }));

  it('should fail', function () {
    expect(vm).to.not.be.undefined();
  });

  it('should expose a vm.articles array', function () {
    expect(vm.articles).to.exist();
    expect(angular.isArray(vm.articles)).to.be.true();
  });

  it('should utilize the ArticleService to retrieve a collection of articles on initialization', function(){
    var spy = ArticleService.getArticles;

    vm = $controller('ArticleListController');

    expect(spy).to.have.been.called();
  });

  it('should $log an error if retrieval fails');
  it('should store the collection as vm.articles');

});
