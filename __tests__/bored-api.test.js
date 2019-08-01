import {BoredAPI} from '../bored-api';

describe('Bored API', () => {
  it('fetches data over the network', async () => {
    const mockFetch = buildFetch({activity: 'learn how to tie a bow tie'});

    const api = new BoredAPI(mockFetch);
    expect(await api.fetchActivity()).toEqual('learn how to tie a bow tie');
  });
});


function buildFetch(res) {
  return jest.fn(() => ({
    json: jest.fn(() => res),
  }));
}
