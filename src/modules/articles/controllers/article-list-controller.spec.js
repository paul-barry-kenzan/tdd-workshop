'use strict';

describe('Article List Controller', function () {

  var $rootScope;
  var $controller;
  var $log;
  var $q;
  var vm;

  var ArticleService;

  beforeEach(module('wui.workshops.tdd.articles'));

  beforeEach(module(function ($provide) {

    $provide.service('ArticleService', function($q){
      this.getArticles = sinon.stub().returns($q.reject('Error! Could not retrieve articles.'));
    });

  }));

  beforeEach(inject(function (_$rootScope_, _$controller_, _$log_, _$q_, _ArticleService_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    $log = _$log_;
    $q = _$q_;

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

  it('should $log a "Error! Could not retrieve articles." error if retrieval fails', function () {
    var spy = sinon.spy($log, 'error');

    vm = $controller('ArticleListController');

    $rootScope.$apply();

    expect(spy).to.have.been.calledWith('Error! Could not retrieve articles.');
  });

  it('should store the collection as vm.articles', function () {
    ArticleService.getArticles.returns($q.resolve([{}, {}]));

    vm = $controller('ArticleListController');

    $rootScope.$apply();

    expect(vm.articles.length).to.equal(2);
  });

});

