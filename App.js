/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import boredApi from './bored-api';

class AppScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActivityShown: false,
      activityText: '',
    };
  }

  boredClicked = async () => {
    const retrievedActivityText = await this.props.fetchActivity();
    this.setState({
      isActivityShown: true,
      activityText: retrievedActivityText,
    });
  }

  render() {
    const {activityText, isActivityShown} = this.state;
    return (
      <View testID="mainScreen">
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <View>
                <TouchableOpacity onPress={this.boredClicked} testID="GET_ACTIVITY">
                  <View><Text>I'm bored</Text></View>
                </TouchableOpacity>
                <Activity activityText={activityText} isActivityShown={isActivityShown}/>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      </View>
    );
  }
}

const Activity = ({isActivityShown, activityText}) => {
  if (isActivityShown) {
    return (<View><Text testID="ACTIVITY_TEXT">{activityText}</Text></View>);
  }

  return null;
};

const App = ({fetchActivity = boredApi.fetchActivity}) => <AppScreen fetchActivity={fetchActivity}/>;

export default App;
