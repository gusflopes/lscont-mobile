import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';

// import { Container } from './styles';

export default function PieChartExample() {
  const data = [100, 120, 98, 80, 106, 124];

  const pieDate = data.map((value, index) => ({
    value,
    key: `pie-data-${value}-${index}`,
    svg: {
      fill: `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(
        0,
        7
      ),
    },
    label: 'Casaco',
  }));

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <Text
          key={`pie-label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fontSize={24}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {data.value /* data.label */}
        </Text>
      );
    });
  };

  return (
    <View>
      <Text>Settings Page</Text>
      <PieChart
        style={{
          height: 500,
        }}
        outerRadius="70%"
        innerRadius="20%"
        data={pieDate}
      >
        <Labels />
      </PieChart>
    </View>
  );
}
