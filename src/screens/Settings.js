import React from 'react';
import { View, Text } from 'react-native';
import PieChart from '../components/Charts/PieChart';
import LineChart from '../components/Charts/LineChart';
import BarChart from '../components/Charts/BarChart';
import ProgressCircle from '../components/Charts/ProgressCircule';

// import { Container } from './styles';

export default function SettingsScreen() {
  return (
    <View style={{ marginTop: 100 }}>
      <Text style={{ marginVertical: 20 }}>Settings Page</Text>
      <ProgressCircle />
    </View>
  );
}
