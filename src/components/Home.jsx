import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native'
import { Button,Text } from 'react-native-paper';

const Home = ({stats,vaccine}) => {
    console.log("here")
    const styles = StyleSheet.create({
        content:{
            flex:1,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        },
        buttons: {
            padding:16
        }
      });


    return(
        <View style={styles.content}>
            <View style={styles.buttons}>
            <Button onPress={stats} mode="contained" >
                <Text style={{fontSize:16}}>Covid Stats</Text>
            </Button>
            </View>
            <View>
            <Button onPress={vaccine} mode="contained" >
                <Text  style={{fontSize:16}}>Vaccine </Text>
            </Button>
            </View>
        </View>
    )


}

export default Home;