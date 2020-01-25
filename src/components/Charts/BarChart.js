import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

// import { Container } from './styles';

export default function Charts() {
  const data = [80, 95, 100, 120, 106, 97, 98];

  return (
    <SafeAreaView
      style={{
        marginTop: 50,
        marginHorizontal: 20,
        height: 250,
        flexDirection: 'row',
      }}
    >
      <YAxis
        data={data}
        style={{ marginBottom: 30 }}
        contentInset={{ top: 10, bottom: 10 }}
      />
      <View style={{ flex: 1 }}>
        <BarChart
          style={{ flex: 1 }}
          data={data}
          gridMin={0}
          svg={{
            fill: '#7159c1',
            onPress: (item, index) => {
              alert({ item }); // da pra fazer um navigate para o mês talvez?
            },
          }}
        >
          <Grid />
        </BarChart>
        <XAxis
          style={{ paddingTop: 8, height: 30 }}
          data={data}
          scale={scale.scaleBand} // para alinhar os itens entre si automaticamente
          formatLabel={(value, index) => index}
          contentInset={{ top: 10, bottom: 10 }}
        />
      </View>
    </SafeAreaView>
  );
}
