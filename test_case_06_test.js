Feature('BUSPATROL S.D.E.T Tech Test'); 

Scenario('TEST CASE NO: 6 :: When I navigate to https://www.spicejet.com/', async ({I}) => {
  I.amOnPage('https://book.spicejet.com/');
  console.log('spicejet.com has been changed to book.spicejet.com');
  I.waitForElement({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"}, 60);
  I.seeElementInDOM({css: "#ControlGroupSearchView_AvailabilitySearchInputSearchView_ButtonSubmit"});
  //
  const items = await I.grabNumberOfVisibleElements({css: ".search-buttons-heading li"});
  for (let i = 1; i <= items; i++) {
    I.say("I see navbar control with value :: " + await I.grabTextFrom({css: ".search-buttons-heading li:nth-child("+i+")"}));
  }
  const isSelected = await I.grabAttributeFrom({css: "[title='Book a Flight']"}, "class");
  (isSelected === 'selected') ? I.say("Flights option is default selected.") : I.say("Flights option is not default selected.");

  const radioItems = await I.grabNumberOfVisibleElements({xpath: "(//*[@id='travelOptions']/*/input)"});
  for (let j = 1; j <= radioItems; j++) {
    I.say("I see radiobutton options with name :: " + await I.grabAttributeFrom({css: "(//*[@id='travelOptions']/*/input)["+j+"]"}, "value"));
    I.click({css: "(//*[@id='travelOptions']/*/input)["+j+"]"});
  }
});