import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View>
            <Text>Hello world!</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
