Feature('BUSPATROL S.D.E.T Tech Test'); 
const spicejet = require('../pages/spicejet');

Scenario('TEST CASE NO: 10 :: When I navigate to https://www.spicejet.com/', async () => {

  console.log('spicejet.com has been changed to book.spicejet.com');
  await spicejet.openSpiceJetWebPage();
  await spicejet.iamOnHomepage();
  await spicejet.selectOneWay();
  await spicejet.selectBookTAB();
  await spicejet.enterOrigin();
  await spicejet.enterDestination();
  await spicejet.enterNineDate();
  await spicejet.openPassenger();
  await spicejet.selectAdult("1");
  await spicejet.selectUSDCurrency();
  await spicejet.searchFlights();
  await spicejet.iSeeURL();
  await spicejet.noFareFound();
  await spicejet.iSeeGoButton();
  await spicejet.iSeeGoButton
  await spicejet.iseeSameStatus();
});