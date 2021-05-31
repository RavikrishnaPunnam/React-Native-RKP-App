import React from 'react';
import { Text, View,StyleSheet,Platform,Dimensions ,Image,TextInput,Modal,FlatList, TouchableWithoutFeedback,Alert,TouchableOpacity} from 'react-native';
import * as Location from 'expo-location';
import { useState,useEffect } from 'react';
import Constants from 'expo-constants';
import MapView,{Marker} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useSelector,useDispatch} from 'react-redux';
export default function Geolocation({navigation}: {navigation: any}){
    // let data = route.params;
    // console.log(data);
    // Retrieving the data from Redux 
    const usestateData = useSelector(state => state);
    const mylocationData = usestateData;
    console.log("Location Data" , mylocationData);

    console.log("Coords Data" , mylocationData.location.coords);

    return(
        <View>
            {/* <Map/> */}
            <View style={{height:50}} >
                
            <GooglePlacesAutocomplete 
     placeholder='Search Places'
     minLength={2}
     fetchDetails={true}
     styles={{
       textInputContainer: {
         backgroundColor: 'grey',
       },
       
       textInput: {
         height: 38,
         color: '#5d5d5d',
         fontSize: 16,
       },
       predefinedPlacesDescription: {
         color: '#1faadb',
       },
     }}
      listViewDisplayed='auto'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GooglePlacesSearchQuery={{
          rankby: 'distance',
          types: 'gym'
      }}
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} 
      debounce={200}
      query={{
        key: 'AIzaSyCm80KxxrkDY5xzJrTcckqLpcEkHeCc7_M',
        language: 'en',
        // types:'(cities)',
         location:"{17.3656018,78.3837569}"
      }}
    />
    
    </View>
<View>
<MapView style={styles.map}
 region={{
    latitude: mylocationData.location.coords.latitude,
    longitude: mylocationData.location.coords.longitude,
    latitudeDelta: 0.015,
    longitudeDelta:  0.0121
}}

>
     <Marker 
     coordinate={{
      latitude: mylocationData.location.coords.latitude,
      longitude: mylocationData.location.coords.longitude
     }}
     title={"RKP stays here"}
          description={"This is my location"}
    image={require('../assets/mar.png')}
/>
    </MapView>
    </View>
          

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });