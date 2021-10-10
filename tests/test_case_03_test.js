Feature('BUSPATROL S.D.E.T Tech Test');
const cleartrip = require('../pages/cleartrip'); 

Scenario('TEST CASE NO: 3 :: When I navigate to https://www.cleartrip.com/', async () => {
  await cleartrip.openCleartripWebPage();
  await cleartrip.iamOnHomepage();
  await cleartrip.openHotels();
  await cleartrip.searchTroisPlace();
  await cleartrip.choseCheckinCheckOut();
  await cleartrip.choseTravellers();
  await cleartrip.addRoom1Details();
  await cleartrip.addRoom2Details();
  await cleartrip.searchHotels();
  await cleartrip.iPrintSearchResults();
  
});