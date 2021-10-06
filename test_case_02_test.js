Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 2 :: When I navigate to https://www.cleartrip.com/', async ({I}) => {
  I.amOnPage('https://www.cleartrip.com/');
  I.waitForElement({css: "[title='About Us']"}, 60);
  I.seeElementInDOM({css: "[data-test-attrib='cleartrip-logo']"});
  I.click({css: "[href='/hotels']"});
  I.waitForElement({xpath: "//*[text()='Search for hotels']"}, 60);
  I.seeCurrentUrlEquals("https://www.cleartrip.com/hotels");
  const title = await I.grabTextFrom({xpath: "//*[text()='Search for hotels']"});
  I.say("Title of Page:: " +title);
});