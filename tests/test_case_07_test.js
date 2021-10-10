Feature('BUSPATROL S.D.E.T Tech Test'); 
const spicejet = require('../pages/spicejet'); 

Scenario('TEST CASE NO: 7 :: When I navigate to https://www.spicejet.com/', async () => {
  
  console.log('spicejet.com has been changed to book.spicejet.com');
  await spicejet.openSpiceJetWebPage();
  await spicejet.iamOnHomepage();
  await spicejet.openPassenger();
  await spicejet.selectAdult("1");
  await spicejet.selectInfant("4");
  await spicejet.grabPopUpContent();
});