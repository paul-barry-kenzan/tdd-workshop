'use strict';

describe('Article List Controller', function () {

  var $rootScope;
  var $controller;
  var vm;

  beforeEach(module('wui.workshops.tdd.articles'));

  beforeEach(inject(function (_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;

    vm = $controller('ArticleListController');
  }));

  it('should fail', function () {
    expect(vm).to.not.be.undefined();
  });

  it('should expose a vm.articles array', function () {
    expect(vm.articles).to.exist();
    expect(angular.isArray(vm.articles)).to.be.true();
  });

  it('should utilize the ArticleService to retrieve a collection of articles on initialization');
  it('should $log an error if retrieval fails');
  it('should store the collection as vm.articles');

});
