describe('Main functionality', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow user to get a random activity on the press of a button', async () => {
    await expect(element(by.id('ACTIVITY_TEXT'))).toBeNotVisible();

    await element(by.id('GET_ACTIVITY')).tap();
    await expect(element(by.id('ACTIVITY_TEXT'))).toBeVisible();
  });
});
