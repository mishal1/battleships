var webdriverio = require('webdriverio');
var expect = require('chai').expect;

describe('Homepage', function() {

  var client = {};

  beforeEach(function(done) {
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}   });
    client.init(done);
  });

  afterEach(function(done) {
    client.end(done);
  });

  it('displays header and button',function(done) {
    client
      .url('http://localhost:3000')
      .getText('h1', function(err, text){
          expect(text).to.equal('BATTLESHIPS');
      })
      .getText('#playgame', function(err, text){
        expect(text).to.equal('Play game');
      })
      .call(done);
  });

  it('asks a user to enter their name', function(done){
    client
      .url('http://localhost:3000')
      .getText('#askUserName', function(err, text){
          expect(text).to.equal('What is your name?');
      })
      .click('#playgame')
      .getText('body', function(err, text){
        expect(text).to.equal('BATTLESHIPS\nClick where you would like to place your ships');
      })
      .call(done);
  });

  it('user places ships', function(done){
    client
      .url('http://localhost:3000')
      .click('#playgame')
      .waitForVisible('#userboard')
      .isExisting('img', function(err, isExisting) {
        expect(isExisting).to.equal(false);
      })
      .click('#first-tile')
      .isExisting('img', function(err, isExisting) {
        expect(isExisting).to.equal(true);
      })
      .call(done);
  });

  it('user is notified to add ship in empty square', function(done){
    client
      .url('http://localhost:3000')
      .click('#playgame')
      .waitForVisible('#userboard')
      .click('#first-tile')
      .click('#first-tile')
      .getText('#placeshipstext', function(err, text){
        expect(text).to.equal('Cell already contains a ship!');
      })   
      .call(done);
  });

  it('user is notified to wait for another player', function(done){
    client
      .url('http://localhost:3000')
      .click('#playgame')
      .waitForVisible('#userboard')
      .click('#first-tile')
      .click('#second-tile')
      .getText('#placeshipstext', function(err, text){
        expect(text).to.equal('Waiting for opponent...');
      })   
      .call(done);
  });

});