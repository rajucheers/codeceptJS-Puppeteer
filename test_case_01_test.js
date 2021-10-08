Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 1 :: When I navigate to https://www.cleartrip.com/', async ({I}) => {
  I.amOnPage('https://www.cleartrip.com/');
  I.waitForElement({css: "[title='About Us']"}, 60);
  I.seeElementInDOM({css: "[data-test-attrib='cleartrip-logo']"});
  I.click({css: "[class='radio w-100p radio__secondary']:nth-child(2)"});
  I.click({xpath: "//*[contains(@class, 'homeCalender')]/*[1]/*/*"});
  I.click({xpath: "//*[contains(@aria-label, 'Mon Oct 11 2021')]/*[1]"});
  I.click({xpath: "//*[contains(@aria-label, 'Mon Oct 18 2021')]/*"});
  I.pressKey("Tab");
  I.wait(2);
  I.selectOption("(//*[contains(@class, 'bc-neutral-100 bg-transparent')])[1]", "3");
  I.selectOption("(//*[contains(@class, 'bc-neutral-100 bg-transparent')])[2]", "2");
  I.selectOption("(//*[contains(@class, 'bc-neutral-100 bg-transparent')])[3]", "1");
  I.click({xpath: "(//*[text()='Search flights'])[2]"});
  const err = await I.grabTextFrom({css: "[class*='bg-error-600 row']"});
  I.say("Error on Page:: " +err);
  console.log("I see an error message saying, 'Sorry, but we can't continue until you fix everything that's marked in RED'");
});