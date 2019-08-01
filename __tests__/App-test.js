jest.mock('../bored-api');
import 'react-native';
import App from '../App';
import {componentDriver, getTextNodes} from 'react-component-driver';

describe('Bored app', () => {
  let component;
  let mockFetchActivity;

  beforeEach(() => {
    mockFetchActivity = require('../bored-api').default.fetchActivity;
    mockFetchActivity.mockReturnValue(Promise.resolve('learn to play banjo'));
    component = driver().setProps({fetchActivity: mockFetchActivity});
  });

  it('renders button and no activity by default', () => {
    expect(component.getActivity()).toBeUndefined();
  });

  it('renders renders activity when pressing activity button', async () => {
    await actAndFlushPromises(component.pressActivityButton());
    expect(component.getActivity()).toEqual('learn to play banjo');
  });

  it('renders renders activity from network when pressing activity button', async () => {
    mockFetchActivity.mockReturnValue(Promise.resolve('learn to make pink soup'));

    component.render();
    await actAndFlushPromises(component.pressActivityButton());
    expect(component.getActivity()).toEqual('learn to make pink soup');
  });
});

const driver = () => componentDriver(App, {
  pressActivityButton() {
    const button = this.getByID('GET_ACTIVITY');
    button.props.onClick();
    return this;
  },
  getActivity() {
    return getTextNodes(this.getByID('ACTIVITY_TEXT'))[0];
  },
});

async function actAndFlushPromises(result) {
  const promise = new Promise((resolve) => setTimeout(resolve));
  await promise;
  return result;
}
