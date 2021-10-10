const { I } = inject();
const commonMethods = require('./common');

const header = {css: "#advsearch-title"};
const title = {css: "#advsearch-title"};
const min = {css: "#advsearch-yearpublished-min"};
const max = {css: "#advsearch-yearpublished-max"};


const openboardGameWebPage = () => {
  commonMethods.openWebsite('https://boardgamegeek.com/advsearch/boardgame')
  commonMethods.waitForControltoLoad(header);
  };

const iamOnHomepage = async () => {
  I.seeElementInDOM(header);
};

const enterTitle = async () => {
  I.fillField(title, "Harry Potter and the Sorcerer's Stone Trivia Game");
};

const selectMinYear = async () => {
  I.fillField(min, "1999");
};

const selectMaxYear = async () => {
  I.fillField(max, "2000");
};

const minPlayTime = async () => {
  I.executeScript(function() {
    document.querySelector("#advsearch-min-playing-time").value = "15";
  });
};

const maxPlayTime = async () => {
  I.executeScript(function() {
    document.querySelector("#advsearch-max-playing-time").value = "90";
  });
};
 
const submit = async () => {
  I.click({css: "[value='Submit']"});
  I.waitForElement({css: ".collection_bggrating"}, 60);
};

const iseelinkDisplayed = async () => {
  I.say(await I.grabTextFrom({css: "#results_objectname1"}));
};




  
module.exports = {
  openboardGameWebPage,
  iamOnHomepage,
  enterTitle,
  selectMinYear,
  selectMaxYear,
  minPlayTime,
  maxPlayTime,
  submit,
  iseelinkDisplayed
}
  