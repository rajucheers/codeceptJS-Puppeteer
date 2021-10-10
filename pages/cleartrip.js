const { I } = inject();
const commonMethods = require('./common');

const aboutUS = {css: "[title='About Us']"};
const clearTripLogo = {css: "[data-test-attrib='cleartrip-logo']"};
const radioButton = {css: "[class='radio w-100p radio__secondary']:nth-child(2)"};
const calendar = {xpath: "//*[contains(@class, 'homeCalender')]/*[1]/*/*"};
const date11 = {xpath: "//*[contains(@aria-label, 'Mon Oct 11 2021')]/*[1]"};
const date18 = {xpath: "//*[contains(@aria-label, 'Mon Oct 18 2021')]/*"};
const adult = {xpath: "(//*[contains(@class, 'bc-neutral-100 bg-transparent')])[1]"};
const children = {xpath: "(//*[contains(@class, 'bc-neutral-100 bg-transparent')])[2]"};
const infant = {xpath: "(//*[contains(@class, 'bc-neutral-100 bg-transparent')])[3]"};
const searchFlights = {xpath: "(//*[text()='Search flights'])[2]"};
const errMessage = {css: "[class*='bg-error-600 row']"};
const hotles = {css: "[href='/hotels']"};
const hotelsPage = {xpath: "//*[text()='Search for hotels']"};
const whereTo = {css: "[name='search']"};
const troisRivesPlace = {xpath: "//*[@name='hotel-search']/*/*[@class='p-relative'][1]/div[2]/li/p[text()='Trois-Rives, ']"};
const checkinField = {xpath: "//*[contains(@name, 'from')]/*/*"};
const checkInDate = {xpath: "//*[contains(@aria-label, 'Mon Oct 18 2021')]/*[1]"};
const checkOutDate = {xpath: "//*[contains(@aria-label, 'Mon Oct 25 2021')]/*"};
const travellers = {xpath: "//*[contains(@name, 'travellers')]/*/*"};
const addmoreTravellers = {xpath: "//*[text()='Add more rooms and travellers']"};
const addRoom = {xpath: "//*[text()='Add room']"};
const room1Adult = {xpath: "(//*[text()='Room '])[1]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[2]/ul/li[1]"};
const room1Child = {xpath: "(//*[text()='Room '])[1]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[4]/ul/li[3]"};
const room1ChildYear = {xpath: "(//*[text()='Room '])[1]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[5]/*/*/*"};
const room2Adult = {xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[2]/ul/li[3]"};
const room2Child = {xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[4]/ul/li[3]"};
const room2ChildYear = {xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[5]/*/*/*"};
const searchHotel = {xpath: "//*[text()='Search Hotels']"};
const warning = {css: "[class='warningMessage']"};



const openCleartripWebPage = () => {
  commonMethods.openWebsite('https://www.cleartrip.com/')
  commonMethods.waitForControltoLoad(aboutUS);
  };

const iamOnHomepage = () => {
  I.seeElementInDOM(clearTripLogo);
  };

const selectRoundTrip = () => {
  I.click(radioButton);
  };

const selectTravelDate = () => {
  I.click(calendar);
  I.click(date11);
  I.click(date18);
  I.pressKey("Tab");
  I.wait(2);
  };

const selectAdults = () => {
  I.selectOption(adult, "3");
  };

const selectChildren = () => {
  I.selectOption(children, "2");
  };

const selectInfant = () => {
  I.selectOption(infant, "1");
  };
    
const searchFlight = () => {
  I.click(searchFlights);
  };

const readErroMessage = async () => {
  const err = await I.grabTextFrom(errMessage);
  I.say("Error on Page:: " +err);
  console.log("I see an error message saying, 'Sorry, but we can't continue until you fix everything that's marked in RED'");
  };  

const openHotels = () => {
  I.click(hotles);
  I.waitForElement(hotelsPage, 60);
  };

const validateHotelsPage= () => {
  I.seeCurrentUrlEquals("https://www.cleartrip.com/hotels");
  };
  
const iseeTitleSearchForHotels= async () => {
  const title = await I.grabTextFrom({xpath: "//*[text()='Search for hotels']"});
  I.say("Title of Page:: " +title);
  };

const searchTroisPlace = () => {
  I.clearField(whereTo);
  I.fillField(whereTo, "Trois Rives"); // Reson of Selecting this option is, search for Canada string is not pulling result "Trovis Rives"
  I.click(whereTo);
  I.waitForVisible(troisRivesPlace, 10);
  I.wait(2);
  I.click(troisRivesPlace);
  };

const choseCheckinCheckOut = () => {
  I.click(checkinField);
  I.click(checkInDate);
  I.click(checkOutDate);
  I.pressKey("Tab");
  };

const choseTravellers = () => {
  I.click(travellers);
  I.click(addmoreTravellers);
  };

const addRoom1Details = () => {
  //Room 1
  I.click(addRoom);
  I.click(room1Adult);
  I.click(room1Child);
  I.selectOption(room1ChildYear, "3")
  };

const addRoom2Details = () => {
  //Room 2
  I.click(room2Adult);
  I.click(room2Adult);
  I.click(room2Child);
  I.click(room2Child);
  I.selectOption(room2ChildYear, "1");
  I.selectOption(room2ChildYear, "4");
  };

const searchHotels = () => {
  I.click(searchHotel);
  I.waitForElement(warning, 20);
  };

const iPrintSearchResults = async () => {
  const message = await I.grabTextFrom(warning);
  I.say("message on Page:: " +message);
  };

module.exports = {
    openCleartripWebPage,
    iamOnHomepage,
    selectRoundTrip,
    selectTravelDate,
    selectAdults,
    selectChildren,
    selectInfant,
    searchFlight,
    readErroMessage,
    openHotels,
    validateHotelsPage,
    iseeTitleSearchForHotels,
    searchTroisPlace,
    choseCheckinCheckOut,
    choseTravellers,
    addRoom1Details,
    addRoom2Details,
    searchHotels,
    iPrintSearchResults
 }
  