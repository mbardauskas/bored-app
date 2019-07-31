import 'react-native';
import App from '../App';
import {componentDriver, getTextNodes} from 'react-component-driver';

describe('Bored app', () => {
  it('renders button and no activity by default', () => {
    const component = driver();
    expect(component.getActivity()).toBeUndefined();
  });

  it('renders renders activity when pressing activity button', () => {
    const component = driver();

    component.pressActivityButton();
    expect(component.getActivity()).toEqual('learn to play banjo');
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
