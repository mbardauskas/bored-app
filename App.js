import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default api => class App extends React.Component {
  state = {};

  getActivity = async () => this.setState({activity: await api.fetchActivity()});

  render() {
    const {activity} = this.state;
    return (
      <View testID="MAIN_SCREEN" style={styles.container}>
        <SafeAreaView>
          <View>
            <TouchableOpacity testID="GET_ACTIVITY_CTA" onPress={this.getActivity}>
              <Text>I am Bored</Text>
            </TouchableOpacity>
            {activity ? <View>
              <Text testID="ACTIVITY_TEXT">{activity}</Text>
            </View> : null}
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
