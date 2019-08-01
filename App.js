/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
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
      <View testID="mainScreen" style={styles.container}>
        <SafeAreaView>
          <View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={this.boredClicked} testID="GET_ACTIVITY" style={styles.button}>
                <View><Text style={styles.buttonText}>I'm bored</Text></View>
              </TouchableOpacity>
            </View>
            <Activity activityText={activityText} isActivityShown={isActivityShown}/>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const Activity = ({isActivityShown, activityText}) => {
  if (isActivityShown) {
    return (<View style={styles.activity}><Text style={styles.activityText} testID="ACTIVITY_TEXT">{activityText}</Text></View>);
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  activity: {
    marginTop: 20,
    marginHorizontal: 50,
  },
  activityText: {
    fontSize: 20,
  },
});

const App = ({fetchActivity = boredApi.fetchActivity}) => <AppScreen fetchActivity={fetchActivity}/>;

export default App;
