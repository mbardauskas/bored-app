import { start, stop, mockActivityResponse } from "../fake-server/server";

describe('Bored App', () => {
    beforeAll(async () => {
        await start();
    });
    afterAll(() => {
        stop();
    });
    it('should show I am Bored button and suggest activity when clicking it', async () => {
        mockActivityResponse({activity: 'Learn to make pink soup'});
        const driver = boredAppDriver();
        await driver.tapImBored();
        await driver.expectElementToBeVisibleWithText('Learn to make pink soup');
    });
});

function boredAppDriver() {
    return {
        async tapImBored() {
            await element(by.id('GET_ACTIVITY_CTA')).tap();
        },
        async expectElementToBeVisibleWithText(text) {
            await expect(element(by.text(text))).toBeVisible();
        }
    };
}