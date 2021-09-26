import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import Covid from './src/components/Covid';
import Header from "./src/components/Header"
import Vaccine from "./src/components/Vaccine"
import Home from "./src/components/Home"

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
}
const Apppge = ({page,stats,vaccine}) => {
  if(page==="Stats") {
    return (
      <Covid />
    ) }
  else if(page==="Vaccine") {
    return (
      <Vaccine />
    )
  }
  else if(page==="Home") {
    return (
      <Home stats={stats} vaccine={vaccine}/>
    )
  }
}

export default function App() {
  const [page,setPage] = useState("Home")

  const onStats = () => {
    setPage("Stats")
  }

  const onVaccine = () => {
    setPage("Vaccine")
  }

  const goBack = () => {
    setPage("Home")
  }

  return (
    <PaperProvider theme={theme}>
      <Header goBack={goBack}/>
      <Apppge page={page} stats={onStats}  vaccine={onVaccine}/>
    </PaperProvider>
  );
}
