Feature('BUSPATROL S.D.E.T Tech Test'); 
const fourmodules = require('../pages/fourmodules');

Scenario('TEST CASE NO: 5 :: When I navigate to https://www.fourmodules.com/', async () => {
  await fourmodules.openfourModulesWebPage();
  await fourmodules.iamOnHomepage();
  await fourmodules.validateIeltsDropDown();
  await fourmodules.openIELTSAbout();
  await fourmodules.iseeAboutURL();
  await fourmodules.openAnyQuestions();
  await fourmodules.iseeHowCanIHelpPopup();
  await fourmodules.closeHowCanIHelpPopup();
  await fourmodules.signUp();
  await fourmodules.iseesignUpURL();
  
});