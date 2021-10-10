Feature('BUSPATROL S.D.E.T Tech Test'); 
const fourmodules = require('../pages/fourmodules'); 

Scenario('TEST CASE NO: 4 :: When I navigate to https://www.fourmodules.com/', async () => {
  await fourmodules.openfourModulesWebPage();
  await fourmodules.iamOnHomepage();
  await fourmodules.validateIeltsDropDown();
  await fourmodules.validatePTEDropDown();
  await fourmodules.validateCelpipDropDown();
  await fourmodules.validateCaelDropDown();
});