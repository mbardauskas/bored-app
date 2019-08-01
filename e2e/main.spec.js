describe('Main functionality', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow user to get a random activity on the press of a button', async () => {
    const driver = BoredAppDriver();
    await expect(driver.getActivityElement()).toBeNotVisible();

    await driver.pressImBored();
    await expect(driver.getActivityElement()).toBeVisible();
  });
});

const BoredAppDriver = () => {
  return {
    getActivityElement() {
      return element(by.id('ACTIVITY_TEXT'));
    },
    async pressImBored() {
      await element(by.id('GET_ACTIVITY')).tap();
    },
  }
};
