/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import apiFactory from './api';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App(apiFactory(fetch)));
