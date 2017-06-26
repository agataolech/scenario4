require('../node_modules/sprintf.js');


module.exports = {
  'Demo test Google' : function (browser) {
     
      var gameName = "Mayfair Roulette";
      
    browser
      .windowMaximize()
      .url("https://vegas.williamhill.com/")
      .waitForElementVisible("button.btn-search-magnifier", 1000)
      .click("button.btn-search-magnifier")
      .waitForElementVisible("div.search-input__input-wrapper", 1000)
      .setValue("div.search-input__input-wrapper > input", gameName)
      .useXpath()
      .waitForElementVisible(sprintf("//div[text()='%s']", gameName), 1000)
      .moveToElement(sprintf("//div[text()='%s']", gameName), 20, 20)
      .waitForElementVisible(sprintf("//div[text()='%s']/ancestor-or-self::div[@class='tile tile--active tile--expandable']//button[@class='o-btn o-btn--more tile__button-more']", gameName), 5000)
      .click(sprintf("//div[text()='%s']/ancestor-or-self::div[@class='tile tile--active tile--expandable']//button[@class='o-btn o-btn--more tile__button-more']", gameName))
      .useCss()
      .moveTo("button.o-btn.o-btn--big")
      .pause(5000)
      .click("button.o-btn.o-btn--big")
      .waitForElementVisible("div.modal-body", 3000)
      .assert.elementPresent("form#loginForm")
      .end();
  }
};