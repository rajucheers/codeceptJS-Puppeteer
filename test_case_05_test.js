Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 5 :: When I navigate to https://www.fourmodules.com/', async ({I}) => {
  I.amOnPage('https://www.fourmodules.com/');
  I.waitForElement({css: ".header-logo"}, 60);
  I.seeElementInDOM({css: ".header-logo"});
  //CD-IELTS
  I.moveCursorTo({css: "[href='/ielts'] span"});
  I.wait(2);
  const ielts = await I.grabNumberOfVisibleElements({xpath: "//*[@href='/ielts']/following-sibling::ul/li/a"});
  for (let i = 1; i <= ielts; i++) {
    I.say("I see CD-IELTS dropdown with value :: " + await I.grabTextFrom({xpath: "(//*[@href='/ielts']/following-sibling::ul/li/a)["+i+"]"}));
  }
  I.click({xpath: "//*[@href='/ielts']/following-sibling::ul/li[1]"});
  I.waitForElement({css: ".course-des-title.underline"}, 60);
  I.seeCurrentUrlEquals("https://www.fourmodules.com/ielts");
  I.scrollTo({xpath: "//*[text()='Any Questions?']"});
  I.wait(1);
  I.seeElementInDOM({xpath: "//*[text()='Any Questions?']"});
  I.click({xpath: "//*[text()='Any Questions?']"});
  I.waitForElement({css: "[name='your-message']"}, 60);
  I.seeElementInDOM({css: "[name='your-message']"});
  I.say("I see a pop window with Title 'How can we help'");
  I.click({xpath: "//*[text()='How can we help?']/../*/*"});
  I.click({css: "[href='/signup']"});
  I.seeCurrentUrlEquals("https://www.fourmodules.com/signup");
  I.say("I see current url as 'https://www.fourmodules.com/signup'");
});