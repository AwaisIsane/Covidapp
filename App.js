import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather  from './src/components/Weather';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import Covid from './src/components/Covid';
import Header from "./src/components/Header"
import Vaccine from "./src/components/Vaccine"

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Header />
      <Vaccine />
    </PaperProvider>
  );
}
