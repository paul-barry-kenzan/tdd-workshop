'use strict';

describe('Article List Controller', function () {

  var $rootScope;
  var $controller;
  var vm;

  beforeEach(module('wui.workshops.tdd.articles'));

  beforeEach(inject(function (_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;

    vm = $controller('ArticleListController', {});
  }));

  it('should fail', function () {
    expect(vm).to.not.be.undefined();
  });

});
