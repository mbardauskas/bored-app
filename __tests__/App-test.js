jest.mock('TouchableOpacity', () => 'TouchableOpacity');

import {componentDriver, getTextNodes} from 'react-component-driver';

import BoredApp from '../App';
import apiFactory from '../api';
const api = apiFactory();

describe('Bored app', () => {
  beforeEach(() => {
    jest.spyOn(api, 'fetchActivity').mockResolvedValue('Learn to make a web app');
  });

  it('does not render activity text', () => {
    expect(boredApp().getActivityText()).toBeUndefined();
  });

  it('renders activity text after "I am bored" is pressed', async () => {
    const driver = await boredApp(api).tapImBored();
    expect(driver.getActivityText())
      .toEqual('Learn to make a web app');
  });
});

function boredApp(api) {
  return componentDriver(BoredApp(api), {
    async tapImBored() {
      this.getByID('GET_ACTIVITY_CTA').props.onPress();
      return this;
    },
    getActivityText() {
      return getTextNodes(this.getByID('ACTIVITY_TEXT'))[0];
    }
  });
}
