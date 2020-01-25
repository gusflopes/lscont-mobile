import React from 'react';
import { SafeAreaView } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';

// import { Container } from './styles';

export default function Charts() {
  const data = [80, 95, 100, 120, 106, 97, 98];

  return (
    <SafeAreaView>
      <LineChart
        style={{ height: 300, width: 400 }}
        data={data}
        svg={{ stroke: '#7159c1' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    </SafeAreaView>
  );
}
