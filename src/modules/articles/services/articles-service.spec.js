'use strict';

describe('Articles Service', function () {

  var $rootScope;
  var $httpBackend;
  var ArticleService;

  beforeEach(module('wui.workshops.tdd.articles'));

  beforeEach(inject(function (_$rootScope_, _$httpBackend_, _ArticleService_) {
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    ArticleService = _ArticleService_;
  }));

  it('should exist', function () {
    expect(ArticleService).to.exist();
  });

  it('should expose a getArticles method', function () {
    expect(ArticleService.getArticles).to.not.undefined();
    expect(angular.isFunction(ArticleService.getArticles)).to.be.true();
  });

  it('should return a promise when calling getArticles', function () {
    expect(ArticleService.getArticles().then).to.exist();
    expect(ArticleService.getArticles().catch).to.exist();
  });

  it('should retrieve the data from the data source', function(){
    $httpBackend
      .whenGET('path/to/file.json')
      .respond(200, [{}]);

    ArticleService.getArticles()
      .then(function(response){
        expect(response.data.length).to.equal(1);
      });

    $httpBackend.flush();
  });

  it('should $log a "Request Error! There was an error with the request." error if the server returns a 500 status');

});
