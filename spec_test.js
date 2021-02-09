Feature('My First Test'); 

Scenario('test something@smoke', async ({I}) => {
  I.amOnPage('/');
  I.see('ADP');
  I.click('What We Offer');
  I.click('Who We Sdferve');
  I.click('Resources');
  I.click('About ADP');
  I.click('Learn About ADP');
  I.waitForElement('.proxima-bold.text-center', 30);
  I.see('Who We Are');
  //I.scrollTo('800-225-5237');
  //I.scrollPageToBottom();
  //I.scrollTo('footer');
  //I.scrollTo('//a[contains(.,"tel:8002255237"]');
  I.scrollTo({xpath: '//a[@href="tel:8002255237"]'});
  //pause();
  //I.scrollTo(locate('800-225-5237').withAttr({ href: 'tel:8002255237' }));
  let date = await I.executeScript(function(el) {
  // only basic types can be returned
  return $(el).datetimepicker('getDate').toString();
}, '#date'); // passing jquery selector
});

Scenario('test askdfjsdf something', async ({I}) => {
  I.amOnPage('/');
  I.see('ADP');
  I.click('What We Offer');
  I.click('Who We Sdferve');
  I.click('Resources');
  I.click('About ADP');
  I.click('Learn About ADP');
  I.waitForElement('.proxima-bold.text-center', 30);
  I.see('Who We Are');
  //I.scrollTo('800-225-5237');
  //I.scrollPageToBottom();
  //I.scrollTo('footer');
  //I.scrollTo('//a[contains(.,"tel:8002255237"]');
  I.scrollTo({xpath: '//a[@href="tel:8002255237"]'});
  //pause();
  //I.scrollTo(locate('800-225-5237').withAttr({ href: 'tel:8002255237' }));
  let date = await I.executeScript(function(el) {
  // only basic types can be returned
  return $(el).datetimepicker('getDate').toString();
}, '#date'); // passing jquery selector
});