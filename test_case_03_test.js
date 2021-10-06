Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 3 :: When I navigate to https://www.cleartrip.com/', async ({I}) => {
  I.amOnPage('https://www.cleartrip.com/');
  I.waitForElement({css: "[title='About Us']"}, 60);
  I.seeElementInDOM({css: "[data-test-attrib='cleartrip-logo']"});
  I.click({css: "[href='/hotels']"});
  I.waitForElement({xpath: "//*[text()='Search for hotels']"}, 60);
  I.clearField({css: "[name='search']"});
  I.fillField({css: "[name='search']"}, "Trois Rives"); // Reson of Selecting this option is, search for Canada string is not pulling result "Trovis Rives"
  I.click({css: "[name='search']"});
  I.waitForVisible("//*[@name='hotel-search']/*/*[@class='p-relative'][1]/div[2]/li/p[text()='Trois-Rives, ']", 10);
  I.wait(2);
  I.click("//*[@name='hotel-search']/*/*[@class='p-relative'][1]/div[2]/li/p[text()='Trois-Rives, ']");
  I.click({xpath: "//*[contains(@name, 'from')]/*/*"});
  I.click({xpath: "//*[contains(@aria-label, 'Mon Oct 11 2021')]/*[1]"});
  I.click({xpath: "//*[contains(@aria-label, 'Mon Oct 18 2021')]/*"});
  I.pressKey("Tab");
  I.click({xpath: "//*[contains(@name, 'travellers')]/*/*"});
  I.click({xpath: "//*[text()='Add more rooms and travellers']"});
  //Room 1
  I.click({xpath: "//*[text()='Add room']"});
  I.click({xpath: "(//*[text()='Room '])[1]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[2]/ul/li[1]"});
  I.click({xpath: "(//*[text()='Room '])[1]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[4]/ul/li[3]"});
  I.selectOption({xpath: "(//*[text()='Room '])[1]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[5]/*/*/*"}, "3")
  //Room 2
  I.click({xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[2]/ul/li[3]"});
  I.click({xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[2]/ul/li[3]"});
  I.click({xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[4]/ul/li[3]"});
  I.click({xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[4]/ul/li[3]"});
  I.selectOption({xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[5]/*/*/*"}, "1");
  I.selectOption({xpath: "(//*[text()='Room '])[2]/ancestor::div[@class='flex flex-middle flex-between']/following-sibling::div[5]/*[2]/*/*"}, "4");
  I.click({xpath: "//*[text()='Search Hotels']"});
  I.waitForElement({css: "[class='warningMessage']"}, 10);
  const message = await I.grabTextFrom({css: "[class='warningMessage']"});
  I.say("message on Page:: " +message);
});