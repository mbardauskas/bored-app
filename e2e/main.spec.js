import * as fakeServer from '../fake-server/server';

describe.only('Main functionality', () => {
  beforeAll(async () => {
    await fakeServer.start();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterEach(() => {
    fakeServer.resetMocks();
  });

  afterAll(() => {
    fakeServer.stop();
  });

  it('should allow user to get a random activity on the press of a button', async () => {
    fakeServer.mockActivityResponse({activity: 'learn to write tests with drivers'});
    const driver = BoredAppDriver();
    await expect(driver.getActivityElement()).toBeNotVisible();

    await driver.pressImBored();
    await expect(driver.getElementByText('learn to write tests with drivers')).toBeVisible();
  });
});

const BoredAppDriver = () => {
  return {
    getActivityElement() {
      return element(by.id('ACTIVITY_TEXT'));
    },
    getElementByText(text) {
      return element(by.text(text));
    },
    async pressImBored() {
      await element(by.id('GET_ACTIVITY')).tap();
    },
  }
};
