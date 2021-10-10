Feature('BUSPATROL S.D.E.T Tech Test'); 
const boardgame = require('../pages/boardgamegeek');

Scenario('TEST CASE NO: 11 :: When I travel to https://boardgamegeek.com/advsearch/boardgame', async () => {

  await boardgame.openboardGameWebPage();
  await boardgame.iamOnHomepage();
  await boardgame.enterTitle();
  await boardgame.selectMinYear();
  await boardgame.selectMaxYear();
  await boardgame.minPlayTime();
  await boardgame.maxPlayTime();
  await boardgame.submit();
  await boardgame.iseelinkDisplayed();
  
});