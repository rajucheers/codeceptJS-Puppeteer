Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 4 :: When I navigate to https://www.fourmodules.com/', async ({I}) => {
  I.amOnPage('https://www.fourmodules.com/');
  I.waitForElement({css: ".header-logo"}, 60);
  I.seeElementInDOM({css: ".header-logo"});
  //CD-IELTS
  I.moveCursorTo({css: "[href='/ielts'] span"});
  I.wait(2);
  const ielts = await I.grabNumberOfVisibleElements({xpath: "//*[@href='/ielts']/following-sibling::ul/li/a"});
  // I.say(ielts);
  for (var i = 1; i <= ielts; i++) {
    I.say("Options under CD-IELTS dropdown :: " + await I.grabTextFrom({xpath: "(//*[@href='/ielts']/following-sibling::ul/li/a)["+i+"]"}));
  }
  //PTE
  I.moveCursorTo({css: "[href='/pte'] span"});
  I.wait(2);
  const pte = await I.grabNumberOfVisibleElements({xpath: "//*[@href='/pte']/following-sibling::ul/li/a"});
  for (var j = 1; j <= pte; j++) {
    I.say("Options under PTE dropdown :: " + await I.grabTextFrom({xpath: "(//*[@href='/pte']/following-sibling::ul/li/a)["+j+"]"}));
  }
  //CELPIP
  I.moveCursorTo({css: "[href='/celpip'] span"});
  I.wait(2);
  const celpip = await I.grabNumberOfVisibleElements({xpath: "//*[@href='/celpip']/following-sibling::ul/li/a"});
  for (var k = 1; k <= celpip; k++) {
    I.say("Options under CELPIP dropdown :: " + await I.grabTextFrom({xpath: "(//*[@href='/celpip']/following-sibling::ul/li/a)["+k+"]"}));
  }
  //CAEL
  I.moveCursorTo({css: "[href='/cael'] span"});
  I.wait(2);
  const cael = await I.grabNumberOfVisibleElements({xpath: "//*[@href='/cael']/following-sibling::ul/li/a"});
  for (var l = 1; l <= cael; l++) {
    I.say("Options under CAEL dropdown :: " + await I.grabTextFrom({xpath: "(//*[@href='/cael']/following-sibling::ul/li/a)["+l+"]"}));
  }
  
});