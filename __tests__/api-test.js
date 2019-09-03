import apiFactory from "../api";

describe('Bored API', () => {
    let api, mockFetch;

    beforeEach(() => {
        mockFetch = jest.fn(async () => ({json: async () => ({activity: 'Learn to play guitar'})}));
        api = apiFactory(mockFetch);
    });

    it('should call BoredAPI url', async () => {
        await api.fetchActivity();
        expect(mockFetch).toHaveBeenCalledWith('https://www.boredapi.com/api/activity')
    });
    
    it('should return only activity string from response', async () => {
        expect(await api.fetchActivity()).toEqual('Learn to play guitar');
    });
});