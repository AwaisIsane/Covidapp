import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import Covid from './src/components/Covid';
import Header from "./src/components/Header"
import Vaccine from "./src/components/Vaccine"
import Home from "./src/components/Home"
import Doseavailable from './src/components/Doseavailale';
import { Chat } from './src/components/Chat';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
}
const Apppge = ({page,stats,vaccine,chat}) => {
  if(page==="Stats") {
    return (
      <Doseavailable />
      ) }
  else if(page==="Vaccine") {
    return (
      <Vaccine />
    )
  }
  else if(page==="Chat") {
    return (
      <Chat />
    )
  }
  else if(page==="Home") {
    return (
      <Home stats={stats} vaccine={vaccine} chat={chat}/>
    )
  }
}

export default function App() {
  const [page,setPage] = useState("Home")
  const [dis,setDis] = useState(true)
  const onStats = () => {
    setPage("Stats")
    setDis(false)
  }

  const onVaccine = () => {
    setDis(false)
    setPage("Vaccine")
  }

  const goBack = () => {
    setDis(true)
    setPage("Home")
  }

  const onChat = () => {
    setPage("Chat")
    setDis(false)
  }

  return (
    <PaperProvider theme={theme}>
      <Header goBack={goBack} dis={dis}/>
      <Apppge page={page} stats={onStats}  vaccine={onVaccine} chat={onChat}/>
    </PaperProvider>
  );
}
