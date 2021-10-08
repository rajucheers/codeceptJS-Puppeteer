Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 11 :: When I travel to https://boardgamegeek.com/advsearch/boardgame', async ({I}) => {
  I.amOnPage('https://boardgamegeek.com/advsearch/boardgame');
  I.waitForElement({css: "#advsearch-title"}, 60);
  I.seeElementInDOM({css: "#advsearch-title"});
  I.fillField({css: "#advsearch-title"}, "Harry Potter and the Sorcerer's Stone Trivia Game");
  I.fillField({css: "#advsearch-yearpublished-min"}, "1999");
  I.fillField({css: "#advsearch-yearpublished-max"}, "2000");
  I.executeScript(function() {
    document.querySelector("#advsearch-min-playing-time").value = "15";
  });
  I.executeScript(function() {
    document.querySelector("#advsearch-max-playing-time").value = "90";
  });
  I.click({css: "[value='Submit']"});
  I.waitForElement({css: ".collection_bggrating"}, 60);
  I.say(await I.grabTextFrom({css: "#results_objectname1"}));
});