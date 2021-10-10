Feature('BUSPATROL S.D.E.T Tech Test'); 
const spicejet = require('../pages/spicejet'); 

Scenario('TEST CASE NO: 6 :: When I navigate to https://www.spicejet.com/', async ({I}) => {
  
  console.log('spicejet.com has been changed to book.spicejet.com');
  await spicejet.openSpiceJetWebPage();
  await spicejet.verifyNavBarControls();
  await spicejet.verifyFlightDefaultSelection();
  await spicejet.verifyRadioOptionsClickable();
});