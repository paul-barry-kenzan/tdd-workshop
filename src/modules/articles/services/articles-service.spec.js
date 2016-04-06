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

  it('should expose a getArticles method');
  it('should return a promise when calling getArticles');
  it('should $log a "Request Error! There was an error with the request." error if the server returns a 500 status');

});
