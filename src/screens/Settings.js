import React from 'react';
import { View, Text } from 'react-native';
import PieChart from '../components/Charts/PieChart';
import LineChart from '../components/Charts/LineChart';

// import { Container } from './styles';

export default function SettingsScreen() {
  return (
    <View>
      <Text>Settings Page</Text>
      <LineChart />
    </View>
  );
}
