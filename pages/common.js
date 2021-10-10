const { I } = inject();
const WAITFOR = require('../constants');

const openWebsite = async (url) => {
  await I.amOnPage(url);
};

const waitForControltoLoad = async (ele) => {
    await I.waitForElement(ele, WAITFOR.sixtySeconds);
  };
  
module.exports = {
    openWebsite,
    waitForControltoLoad
 }
  