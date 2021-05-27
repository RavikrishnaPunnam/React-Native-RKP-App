import {NavigationContainer} from '@react-navigation/native';
import {Assets, createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity ,Animated,Image,Alert} from 'react-native';
import bottombar from './bottombar';
import savescreen from './main/save';
import menu from './main/menu';
import signInScreen from './main/signin';
import forms from './main/form';
import details from './main/details';
import geolocation from './main/geolocation'
import topbar from './main/Topbar';
import cameragallery from './cameragallery';
const Stack = createStackNavigator();
import {Provider} from 'react-redux';
import {store} from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>   
    <NavigationContainer>
      <Stack.Navigator
      //  screenOptions={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#fff', 
      //  headerTitleStyle: {fontWeight: 'bold',},}}
       >
        <Stack.Screen  name="Bottombar" component={bottombar} 
        options={{
           headerShown: false,         
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => { 
            <View>
              <Text>Hello</Text>
            </View>
           }}>
             <Image
            style={{ width: 30, height: 30 }}
                source={{ uri: 'http://simpleicon.com/wp-content/uploads/active-search.png' }}
                    />
                     </TouchableOpacity>
          ),
          title:'RKP Demo',
        
          headerRight: () => (
            <TouchableOpacity onPress={() => { Alert.alert('click') }}>

            <Image
              style={{ width: 30, height: 30 }}
                  source={{ uri: 'https://img.icons8.com/ios/2x/navigation.png' }}
                       />

              </TouchableOpacity>

          ),
          
        }} />
        <Stack.Screen name="Camera" component={cameragallery}/>
        <Stack.Screen  name="Save" component={savescreen}   options={({ route }) => ({  })}/>
        <Stack.Screen name="Menu" component={menu}/>
        <Stack.Screen name="Signin" component={signInScreen}/>
        <Stack.Screen name="Forms" component={forms}/>
        <Stack.Screen name="Details" component={details}  options={({ route }) => ({ title: route.params.name })}/>
        <Stack.Screen name="Geolocation" component={geolocation}  />
        <Stack.Screen name="Topbar" component={topbar} />



        
      </Stack.Navigator>
    </NavigationContainer>
     </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    borderStyle: 'dashed',
    borderRadius:30,
    
  }
});



export default App;
