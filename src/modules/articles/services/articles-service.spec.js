'use strict';

describe('Articles Service', function () {

  var $rootScope;
  var ArticleService;

  beforeEach(module('wui.workshops.tdd.articles'));

  beforeEach(inject(function (_$rootScope_, _ArticleService_) {
    $rootScope = _$rootScope_;
    ArticleService = _ArticleService_;
  }));

  it('should exist', function () {
    expect(ArticleService).to.exist();
  });

});
