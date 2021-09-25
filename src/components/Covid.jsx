import  React,{useEffect, useState} from 'react';
import {Button,TextInput,Text, DataTable } from 'react-native-paper';
import {View} from 'react-native';
import axios from "axios";
import Staterow from './Staterow';
import {API_KEY} from "../../kys"
const getCovid = async (state) => {

  const options = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/reports',
    params: {iso: 'IND', region_province: state},
    headers: {
      'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
      'x-rapidapi-key': API_KEY
    }
  };

    const res = await axios.request(options);
    const dat = res.data.data[0]
    return dat
}



const Covid =   () => {
    const [data,setData] = useState({"confirmed":"--",
                                    "confirmed_diff":"--",
                                    "deaths":"--",
                                    "region":{"province":"--"}})

    const [text,setText] = useState("")
    const cpy = {...data}
    
    const onSubmit = async () => {
      const dta = await getCovid(text)
      if (dta){ 
      setData(dta)}
      else {
        setData(cpy)
      }
  }




  return (<View>
    <View style={{padding: 10}}>
    <TextInput
      label = "State"
      onChangeText={text => setText(text)}
      value={text}
    />
    <Button onPress={onSubmit} mode="contained">
        <Text>GET</Text>
    </Button>
  </View>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>State</DataTable.Title>
        <DataTable.Title numeric>Confirmed</DataTable.Title>
        <DataTable.Title numeric>New cases</DataTable.Title>
        <DataTable.Title numeric>Deaths</DataTable.Title>
      </DataTable.Header>
      <Staterow state = {data}/>
      </DataTable>
      </View>
  );
}

export default Covid;