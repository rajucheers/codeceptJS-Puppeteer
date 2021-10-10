const { I } = inject();
const commonMethods = require('./common');

const header = {css: ".header-logo"};
const cdIelts = {css: "[href='/ielts'] span"};
const ieltsItems = {xpath: "//*[@href='/ielts']/following-sibling::ul/li/a"};
const pte = {css: "[href='/pte'] span"};
const pteItems = {xpath: "//*[@href='/pte']/following-sibling::ul/li/a"};
const celpip = {css: "[href='/celpip'] span"};
const celpipItems = {xpath: "//*[@href='/celpip']/following-sibling::ul/li/a"};
const cael = {css: "[href='/cael'] span"};
const caelItems = {xpath: "//*[@href='/cael']/following-sibling::ul/li/a"};

const ieltsAbout = {xpath: "//*[@href='/ielts']/following-sibling::ul/li[1]"};
const ieltsAboutPage = {css: ".course-des-title.underline"};
const anyQ = {xpath: "//*[text()='Any Questions?']"};
const hcihPopUp = {css: "[name='your-message']"};
const help = {css: "[name='your-message']"};
const closeButton = {xpath: "//*[text()='How can we help?']/../*/*"};
const signup = {css: "[href='/signup']"};

const openfourModulesWebPage = () => {
  commonMethods.openWebsite('https://www.fourmodules.com/')
  commonMethods.waitForControltoLoad(header);
  };

const iamOnHomepage = async () => {
  I.seeElementInDOM(header);
  };

const validateIeltsDropDown = async () => {
  //CD-IELTS
  I.moveCursorTo(cdIelts);
  I.wait(2);
  const ielts = await I.grabNumberOfVisibleElements({xpath: "//*[@href='/ielts']/following-sibling::ul/li/a"});
  for (var i = 1; i <= ielts; i++) {
    I.say("Options under CD-IELTS dropdown :: " + await I.grabTextFrom({xpath: "(//*[@href='/ielts']/following-sibling::ul/li/a)["+i+"]"}));
  }
  };

const validatePTEDropDown = async () => {
  //PTE
  I.moveCursorTo(pte);
  I.wait(2);
  const pteele = await I.grabNumberOfVisibleElements(pteItems);
  for (let j = 1; j <= pteele; j++) {
    I.say("Options under PTE dropdown :: " + await I.grabTextFrom({xpath: "(//*[@href='/pte']/following-sibling::ul/li/a)["+j+"]"}));
  }
  };

const validateCelpipDropDown = async () => {
  //CELPIP
  I.moveCursorTo(celpip);
  I.wait(2);
  const celpipele = await I.grabNumberOfVisibleElements(celpipItems);
  for (let j = 1; j <= celpipele; j++) {
    I.say("Options under CELPIP dropdown :: " + await I.grabTextFrom({xpath: "(//*[@href='/celpip']/following-sibling::ul/li/a)["+j+"]"}));
  }
  };

const validateCaelDropDown = async () => {
  //CAEL
  I.moveCursorTo(cael);
  I.wait(2);
  const caelele = await I.grabNumberOfVisibleElements(caelItems);
  for (let j = 1; j <= caelele; j++) {
    I.say("Options under CELPIP dropdown :: " + await I.grabTextFrom({xpath: "(//*[@href='/cael']/following-sibling::ul/li/a)["+j+"]"}));
  }
  };

const openIELTSAbout = async () => {
  I.click(ieltsAbout);
  I.waitForElement(ieltsAboutPage, 60);
  };

const iseeAboutURL = async () => {
  I.seeCurrentUrlEquals("https://www.fourmodules.com/ielts");
  };

const openAnyQuestions = async () => {
  I.scrollTo(anyQ);
  I.wait(1);
  I.seeElementInDOM(anyQ);
  I.click(anyQ);
  I.waitForElement(hcihPopUp, 60);
  };

const iseeHowCanIHelpPopup = async () => {
  I.seeElementInDOM(help);
  I.say("I see a pop window with Title 'How can we help'");
  };

const closeHowCanIHelpPopup = async () => {
  I.click(closeButton);
  };

const signUp = async () => {
  I.click(signup);
  };

const iseesignUpURL = async () => {
  I.seeCurrentUrlEquals("https://www.fourmodules.com/signup");
  I.say("I see current url as 'https://www.fourmodules.com/signup'");
  }; 

module.exports = {
  openfourModulesWebPage,
  iamOnHomepage,
  validateIeltsDropDown,
  validatePTEDropDown,
  validateCelpipDropDown,
  validateCaelDropDown,
  openIELTSAbout,
  iseeAboutURL,
  openAnyQuestions,
  iseeHowCanIHelpPopup,
  closeHowCanIHelpPopup,
  signUp,
  iseesignUpURL
 }
  