const { I } = inject();
const commonMethods = require('./common');

const header = {css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"};
const navbar = {css: ".search-buttons-heading li"};
const passenger = {css: "#divpaxinfo"};
const adult = {css: "[name='ControlGroupSearchView$AvailabilitySearchInputSearchView$DropDownListPassengerType_ADT']"};
const infant  = {css: "[id='ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT']"};
const oneW = {xpath: "(//*[@id='travelOptions']/*/input)[1]"};
const goingPrev = {css: "#GoingPrevDay"};
const curr = {css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency"};

const dest = {css: "#ControlGroupSearchView_AvailabilitySearchInputSearchViewdestinationStation1_CTXT"};
const org = {css: "#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1_CTXT"};

const familyFreinds= {css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends"};

const openSpiceJetWebPage = () => {
  commonMethods.openWebsite('https://book.spicejet.com/')
  commonMethods.waitForControltoLoad(header);
  };

const iamOnHomepage = async () => {
  I.seeElementInDOM(header);
  };

const verifyNavBarControls = async () => {
  //
  const items = await I.grabNumberOfVisibleElements(navbar);
  for (let i = 1; i <= items; i++) {
    I.say("I see navbar control with value :: " + await I.grabTextFrom({css: ".search-buttons-heading li:nth-child("+i+")"}));
  }
  };

const verifyFlightDefaultSelection = async () => {
  const isSelected = await I.grabAttributeFrom({css: "[title='Book a Flight']"}, "class");
  (isSelected === 'selected') ? I.say("Flights option is default selected.") : I.say("Flights option is not default selected.");
  };
 
const verifyRadioOptionsClickable = async () => {
  //
  const radioItems = await I.grabNumberOfVisibleElements({xpath: "(//*[@id='travelOptions']/*/input)"});
  for (let j = 1; j <= radioItems; j++) {
    I.say("I see radiobutton options with name :: " + await I.grabAttributeFrom({css: "(//*[@id='travelOptions']/*/input)["+j+"]"}, "value"));
    I.click({css: "(//*[@id='travelOptions']/*/input)["+j+"]"});
  }
  I.click({css: ".ok-btn.float-right"});
  };

const openPassenger = async () => {
  I.click(passenger);
  };
  
const selectAdult = async (cnt) => {
  I.selectOption(adult,cnt);
  };

const selectInfant = async (cnt) => {
  I.selectOption(infant,cnt);
  };

const grabPopUpContent = async () => {
  I.say(await I.grabPopupText());
  I.acceptPopup();
  };

const selectOneWay = async () => {
  I.click(oneW);
  };

const selectBookTAB = async () => {
  I.click({css: "#highlight-book"});
  I.waitForElement({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"}, 60);
  I.wait(3);  
};

const enterOrigin = async () => {
  I.fillField(org, "AGR");
  I.wait(2);  
};

const enterDestination = async () => {
  I.fillField(dest, "JAI");
  I.wait(3);  
};

const enterNineDate = async () => {
  I.click({xpath: "//*[@id='custom_date_picker_id_1'][1]"});
  I.wait(3);
  I.doubleClick({xpath: "(//*[@class='ui-datepicker-group ui-datepicker-group-first']//*[@class='ui-state-default'])[19]"}); 
};

const selectUSDCurrency = async () => {
  I.selectOption(curr,"USD"); 
};

const searchFlights = async () => {
  I.click(header); 
  I.waitForElement(goingPrev, 60);
};

const iSeeURL = async () => {
  I.seeCurrentUrlEquals("https://book.spicejet.com/Select.aspx");
};

const selectFamilyFriends = async () => {
  I.click(familyFreinds);
};

const searchFlightsWithOutWait = async () => {
  I.click(header);
};

const noFareFound = async () => {
  const noRecordMessage = await I.grabTextFrom({css: ".no_flights.padding-left-15"});
  I.say("No fares message :: "+noRecordMessage);
};

const iSeeGoButton = async () => {
  I.click({css: ".trip-expand"});
  I.wait(1);
  I.seeElementInDOM({css: "[name='AvailabilitySearchInputSelectView$ButtonSubmit']"});
};

const iseeSameStatus = async () => {
  I.click({css: "[name='AvailabilitySearchInputSelectView$ButtonSubmit']"});
  I.waitForElement({css: ".no_flights.padding-left-15"},60);
  I.seeElementInDOM({css: ".no_flights.padding-left-15"},60);
};


  
module.exports = {
  openSpiceJetWebPage,
  iamOnHomepage,
  verifyNavBarControls,
  verifyFlightDefaultSelection,
  verifyRadioOptionsClickable,
  openPassenger,
  selectAdult,
  selectInfant,
  grabPopUpContent,
  selectOneWay,
  selectBookTAB,
  enterOrigin,
  enterDestination,
  enterNineDate,
  selectUSDCurrency,
  searchFlights,
  iSeeURL,
  selectFamilyFriends,
  searchFlightsWithOutWait,
  noFareFound,
  iSeeGoButton,
  iseeSameStatus
}
  