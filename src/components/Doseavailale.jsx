import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import cowinService from '../../services/cowin';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button,TextInput, DataTable } from 'react-native-paper';

const Infobox = ({dcentre}) => {
  return (
    <View>
      <Text>name :{dcentre.name}</Text>
      <Text>adress: {dcentre.address}</Text>
      <Text>vaccine: {dcentre.vaccine}</Text>
      <Text>dose1:{dcentre.available_capacity_dose1}</Text>
      <Text>dose2:{dcentre.available_capacity_dose2}</Text>
      <Text>fee:{dcentre.fee}</Text>
    </View>
  )
}

const Doseavailable = () => {

  const [slots,setSlots] = useState([{
    
  }])
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [pincode, setPincode] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
  
    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

  if (coords) {
    const { latitude, longitude } = coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude
    });

    for (let item of response) {
      let address = `${item.postalCode}`;
      console.log(address)
      setPincode(address)
    }
  }
};

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Service not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const getVaccine = async () => {
  const dte = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  if (pincode!="") {
      const slt = await cowinService.getSlotstatus(pincode,dte)
      setSlots(slt)
  }
  else {
    console.log("pin",pincode,"date",dte)
    console.log("check location enabled")
  }
}



  return (
    <View >
      <View>
        <Button onPress={showDatepicker} mode="contained" icon="calendar">
        <Text>Select Date</Text>
        </Button>
      </View>
      <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
      <Button onPress={getVaccine} mode="contained" >
        <Text>Submit</Text>
        </Button>
        <View>
      {slots.map((e,index) => <Infobox dcentre={e} key={index}/>)}
      </View>
    </View>
  );
};

// styles remain same

export default Doseavailable;