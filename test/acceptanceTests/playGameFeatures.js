var webdriverio = require('webdriverio');
var expect = require('chai').expect;

describe('Play Game', function() {

  var client = {};

  beforeEach(function(done) {
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}   });
    client.init(done);
  });

  afterEach(function(done) {
    client.end(done);
  });

  it('two players join the game', function(done){
    playerSetsBoard();
    client.switchTab();
    playerSetsBoard();
    client
    .isVisible('#opponentboard', function(err, visible){
      expect(visible).to.equal(true);
    })
    .call(done);
  });

  var playerSetsBoard = function(){
    client
      .url('http://localhost:3000')
      .click('#playgame')
      .waitForVisible('#userboard')
      .click('#first-tile')
      .click('#second-tile') 
  }

});