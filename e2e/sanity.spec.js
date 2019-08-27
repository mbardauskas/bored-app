describe('Sanity', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show initial screen', async () => {
    await expect(element(by.id('some-non-existing-id'))).toBeVisible();
  });
});
