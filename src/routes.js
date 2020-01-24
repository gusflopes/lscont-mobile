import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: MainScreen,
    Settings: SettingsScreen,
  })
);

export default Routes;
