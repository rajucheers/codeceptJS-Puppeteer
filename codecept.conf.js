exports.config = {
	exclude: [
			'./spec_test.js'
	  ],
  tests: './*_test.js',
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
      browser: 'firefox',
      waitForNavigation: "networkidle0",
	  //marionette: true,
	  osPlatform: 'Windows',
      osVersion: '10',
      host: '127.0.0.1',
      port: 4444,
	  show: true,
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