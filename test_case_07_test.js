Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 7 :: When I navigate to https://www.spicejet.com/', async ({I}) => {
  I.amOnPage('https://book.spicejet.com/');
  console.log('spicejet.com has been changed to book.spicejet.com');
  I.waitForElement({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"}, 60);
  I.seeElementInDOM({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"});
  I.click({css: "#divpaxinfo"});
  I.selectOption({css: "[name='ControlGroupSearchView$AvailabilitySearchInputSearchView$DropDownListPassengerType_ADT']"},"1");
  I.selectOption({css: "[id='ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT']"},"4");
  I.say(await I.grabPopupText());
});