import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import * as Location from 'expo-location';

const Infobox = ({dcentre}) => {
  return (
    <View>
      <Text>{dcentre.name}</Text>
      <Text>{dcentre.address}</Text>
      <Text>{dcentre.vaccine}</Text>
      <Text>{dcentre.available_capacity_dose1}</Text>
      <Text>{dcentre.available_capacity_dose2}</Text>
      <Text>{dcentre.fee}</Text>
    </View>
  )
}

const Doseavailable = () => {

  const [slots,setSlots] = useState([{
    
  }])
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [pincode, setPincode] = useState(
    'Wait, we are fetching you location...'
  );

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



  return (
    <View >
      {}
    </View>
  );
};

// styles remain same

export default Doseavailable;