import React, { useState } from 'react';
import {  View } from 'react-native';
import axios from "axios";
import { Button,TextInput,Text } from 'react-native-paper';


const getWeather = async (city) => {

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: city},
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': '6b0dddce21msh52a1f2557dc94ecp144f36jsncc967659301f'
        }
      }
      
      const response = await axios.request(options);
      const dat = response.data
      console.log("here",dat)
      return dat.current["temp_c"]
      

} 
const Weather =  () => {
    const [text, setText] = useState('');
    const [weatherc, seWeatherc] = useState('');


    const onSubmit = async () => {
        const reswea = await getWeather(text)
        seWeatherc(reswea)
    }
    return (
      <View style={{padding: 10}}>
        <TextInput
   
          label = "City"
          onChangeText={text => setText(text)}
          value={text}
        />
        <Text >
           Temperature is {weatherc} deg cel
        </Text>
        <Button onPress={onSubmit} mode="contained">
            <Text>GET</Text>
        </Button>
      </View>
    );
  }
  
  export default Weather;