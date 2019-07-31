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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <View testID="mainScreen">
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
          >
          <View>
            <Text>Hello world</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
