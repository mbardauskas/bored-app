/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [isActivityShown, setIsActivityShown] = useState(false);
  return (
    <View testID="mainScreen">
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <TouchableOpacity onPress={() => setIsActivityShown(true)} testID="GET_ACTIVITY">
                <View><Text>I'm bored</Text></View>
              </TouchableOpacity>
              <Activity isActivityShown={isActivityShown}/>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    </View>
  );
};

const Activity = ({isActivityShown}) => {
  if (isActivityShown) {
    return (<View><Text testID="ACTIVITY_TEXT">learn to play banjo</Text></View>);
  }

  return null;
};

const styles = StyleSheet.create({
});

export default App;
