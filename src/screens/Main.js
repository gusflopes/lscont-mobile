import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

// import { Container } from './styles';

const data = [
  { competencia: '01/2019', receita: 10000, folha: 2800 },
  { competencia: '02/2019', receita: 10000, folha: 2800 },
  { competencia: '03/2019', receita: 10000, folha: 2800 },
  { competencia: '04/2019', receita: 10000, folha: 2800 },
  { competencia: '05/2019', receita: 10000, folha: 2800 },
  { competencia: '06/2019', receita: 10000, folha: 2800 },
];

export default function MainScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Main Page 123</Text>
      {data.map(n => (
        <Text
          key={n.competencia}
        >{`${n.competencia} - ${n.receita} - ${n.folha}`}</Text>
      ))}
    </SafeAreaView>
  );
}
