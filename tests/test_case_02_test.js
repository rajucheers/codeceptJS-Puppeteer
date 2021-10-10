Feature('BUSPATROL S.D.E.T Tech Test');
const cleartrip = require('../pages/cleartrip'); 

Scenario('TEST CASE NO: 2 :: When I navigate to https://www.cleartrip.com/', async () => {
  await cleartrip.openCleartripWebPage();
  await cleartrip.iamOnHomepage();
  await cleartrip.openHotels();
  await cleartrip.validateHotelsPage();
  await cleartrip.iseeTitleSearchForHotels();
});