Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 9 :: When I navigate to https://www.spicejet.com/', async ({I}) => {
  I.amOnPage('https://book.spicejet.com/');
  console.log('spicejet.com has been changed to book.spicejet.com');
  I.waitForElement({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"}, 60);
  I.seeElementInDOM({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"});
  I.click({xpath: "(//*[@id='travelOptions']/*/input)[1]"});
  I.click({css: "#highlight-book"});
  I.waitForElement({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"}, 60);
  I.click({css: ".book_flight"});
  I.click({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1_CTXT"});
  I.wait(2);
  I.fillField({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1_CTXT"}, "AGR");
  I.wait(2);
  I.fillField({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchViewdestinationStation1_CTXT"}, "JAI");
  I.wait(3);
  I.click({xpath: "//*[@id='custom_date_picker_id_1'][1]"});
  I.wait(3);
  I.doubleClick({xpath: "(//*[@class='ui-datepicker-group ui-datepicker-group-first']//*[@class='ui-state-default'])[19]"});
  I.click({css: "#divpaxinfo"});
  I.selectOption({css: "[name='ControlGroupSearchView$AvailabilitySearchInputSearchView$DropDownListPassengerType_ADT']"},"1");
  I.selectOption({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency"},"USD");
  I.click({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_FamilyAndFriends"});
  I.click({css: "[name='ControlGroupSearchView$AvailabilitySearchInputSearchView$ButtonSubmit']"});
  I.say(await I.grabPopupText());
  I.acceptPopup();
});