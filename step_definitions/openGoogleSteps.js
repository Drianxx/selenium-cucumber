const { Given, Then } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('I open the Google homepage', async function () {
  driver = new Builder().forBrowser('chrome').build();
  await driver.get('https://www.google.com');
});

Then('I see the Google title', async function () {
  const title = await driver.getTitle();
  assert.strictEqual(title, 'Google');
  await driver.quit();
});
