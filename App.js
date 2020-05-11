import {createStackNavigator, createAppContainer} from 'react-navigation';
import SurveyCompletedScreen from './src/screens/SurveyCompleteScreen';
import SurveyScreen from './src/screens/SurveyScreen';
import Home from './src/Home';
import SafetyScreen from './src/screens/Safety';

import {View, Text} from 'react-native';
import React from 'react';

const stackNav = createStackNavigator({
  Home: {
    screen: Home,
  },
  Survey: {
    screen: SurveyScreen,
  },
  SurveyCompleted: {
    screen: SurveyCompletedScreen,
  },
  Safety: {
    screen: SafetyScreen,
  },
});

const AppContainer = createAppContainer(stackNav);

export default AppContainer;
/*
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>sadsadad</Text>
      </View>
    );
  }
}
*/
