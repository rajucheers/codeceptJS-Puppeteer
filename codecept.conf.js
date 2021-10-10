const minimist = require('minimist');
const args = process.argv.slice(2);
const parsedArgs = minimist(args, opts={Boolean});
process.env.BROWSER = parsedArgs.browser;
process.env.HEAD = parsedArgs.head;
const browser = process.env.BROWSER;
const headless = JSON.parse(process.env.HEAD);

console.log(browser);
// console.log(headless);
exports.config = {
	exclude: [
			'./spec_test.js'
	  ],
  tests: './tests/*_test.js',
  output: './output',
  plugins: {
	/*"allure": {
		"enabled": true
	},*/
	/*"screenshotOnFail": {
      // "enabled": true
	  // "uniqueScreenshotNames": false
    },*/
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
	  //connectionRetryCount: 3,
	  seleniumArgs: {
		javaArgs: [
		  '-Dwebdriver.edge.driver=<path_to_driver>'
		    ]
	    }
    }
  },
  helpers: {
    playwright: {
      url: '',
      browser: browser,
      waitForNavigation: "networkidle0",
	  //marionette: true,
	  osPlatform: 'Windows',
      osVersion: '10',
      host: '127.0.0.1',
      port: 4444,
	  show: headless,
    restart: true,
    args: [
      '--ignore-certificate-errors'
  ],
	  //waitforInterval: 500,
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--window-size=1920x1680", "--no-sandbox", "--incognito" ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'vsraj'
}