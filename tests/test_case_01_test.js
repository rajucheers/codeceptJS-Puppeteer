Feature('BUSPATROL S.D.E.T Tech Test');
const cleartrip = require('../pages/cleartrip'); 

Scenario('TEST CASE NO: 1 :: When I navigate to https://www.cleartrip.com/', async () => {
  await cleartrip.openCleartripWebPage();
  await cleartrip.iamOnHomepage();
  await cleartrip.selectRoundTrip();
  await cleartrip.selectTravelDate();
  await cleartrip.selectAdults();
  await cleartrip.selectChildren();
  await cleartrip.selectInfant();
  await cleartrip.searchFlight();
  await cleartrip.readErroMessage();
});