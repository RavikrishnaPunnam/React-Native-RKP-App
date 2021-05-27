import React from 'react';
import { View, Image, Platform,StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert, Button } from 'react-native';
import * as Location from 'expo-location';
import { useState,useEffect } from 'react';
import Constants from 'expo-constants';

export default function  Save({route}){
  
    console.log(route.params.image);
    const submitHandler = (val) =>
    {
        console.log(val);
    }
    
    const [location, setLocation] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [newName,setVal]= useState([
    {timestamp:'',mocked:'',coords:'',latitude: '',longitude:''},

  ]);
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location : any;
        location = await Location.getCurrentPositionAsync();
      setLocation(location);
    })();
  }, []);
  let text = 'Loading..';
  let text2 = 'Loading..';

  let data:any;
  let info:any;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {      
    text = JSON.stringify(location);
    data= JSON.parse(text);
    console.log(data);  
        info = data.coords;
        console.log(info);    
    text=info.latitude;
    text2=info.longitude;
  }
    return(
        <View style={{flex:1}}>
            <Text>Hello</Text> 
            {route.params.image && <Image source={{uri: route.params.image}}
             style={{ width: 230, height: 250,alignItems:'center' }}/>}
            <Text>Hello this is image we got from CameraAndGallery Page</Text> 
            <Text>Latitude: {text}</Text>
            <Text>Longtitude: {text2}</Text>

        </View>
    )
}