const { codecept: Codecept } = require('codeceptjs');
const { config } = require('./codecept.conf.js');

// define main config
const opts = { steps: true };

// run CodeceptJS inside async function
(async () => {
  const codecept = new Codecept(config, opts);
  codecept.init(__dirname);

  try {
    await codecept.bootstrap();
    codecept.loadTests('./tests/*_test.js');
    // run tests
    await codecept.run();
  } catch (err) {
    // printError(err);
    process.exitCode = 1;
  } finally {
    await codecept.teardown();
  }    
})();


 
/*  const { Workers, event } = require('codeceptjs');
 
 const workerConfig = {
  testConfig: './codecept.conf.js',
};

// don't initialize workers in constructor
const workers = new Workers(null, workerConfig);
// split tests by suites in 2 groups
const testGroups = workers.createGroupsOfSuites(2);

const browsers = ['chrome', 'firefox'];

const configs = browsers.map(browser => {
	var data = {
	  helpers: {
		Puppeteer: browser
	  }
	}
	return data
});
const opts = { steps: true };
for (const config of configs) {
  for (group of testGroups) {
    const worker = workers.spawn();
    worker.addTests(group);
    worker.addConfig(config);
	worker.addConfig(
	{mocha:{grep: 'smoke'}
	}
	);
  }
}

// Listen events for failed test
workers.on(event.test.failed, (failedTest) => {
  console.log('Failed : ', failedTest.title);
});

// Listen events for passed test
workers.on(event.test.passed, (successTest) => {
  console.log('Passed : ', successTest.title);
});

// test run status will also be available in event
workers.on(event.all.result, () => {
  // Use printResults() to display result with standard style
  workers.printResults();
});

// run workers as async function
runWorkers();

async function runWorkers() {
  try {
    // run bootstrapAll
    await workers.bootstrapAll();
    // run tests
    await workers.run();
  } finally {
    // run teardown All
    await workers.teardownAll();
  }
} */
