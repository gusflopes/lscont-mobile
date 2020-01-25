import React from 'react';
import { View } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

// import { Container } from './styles';

export default function ProgCircleExample() {
  return (
    <ProgressCircle
      style={{ height: 200 }}
      progress={0.7}
      progressColor="rgb(134,65,244)"
    />
  );
}
