import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

// import { Container } from './styles';

export default function Charts() {
  const data = [80, 95, 100, 120, 106, 97, 98];

  return (
    <SafeAreaView style={{ flexDirection: 'row' }}>
      <YAxis
        data={data}
        style={{ marginBottom: 40, marginTop: 100 }}
        contentInset={{ top: 10, bottom: 10 }}
      />
      <View style={{ flex: 1 }}>
        <LineChart
          style={{ marginLeft: 16, marginTop: 100, height: 300, width: '100%' }}
          data={data}
          svg={{ stroke: '#7159c1' }}
          contentInset={{ top: 20, bottom: 20 }}
          curve={shape.curveCardinal}
          animate
        >
          <Grid />
        </LineChart>
        <XAxis
          style={{ marginLeft: 10, marginHorizontal: -10, height: 30 }}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{ top: 10, bottom: 10 }}
        />
      </View>
    </SafeAreaView>
  );
}
