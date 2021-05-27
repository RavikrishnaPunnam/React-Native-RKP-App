import {Assets, createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import React from 'react';
import { useState } from 'react';
import { Text, View,StyleSheet, TextInput,Image} from 'react-native';
import {Asset} from 'expo-asset';
export default  function signInscreen({navigation}: {navigation: any})
{
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            
            <Text style={styles.header}>Welcome! </Text>
            
        </View>
        <View style={styles.footer}>
            
            <Text>Email</Text>
            <View style={styles.action}>
            <Image
                                    source={{ uri: 'https://img.icons8.com/doodle/2x/gender-neutral-user.png' }}

                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
            <TextInput placeholder='Please enter here'></TextInput>
            </View>

          
        </View>  
          </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'lightgreen'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    //   borderBottomLeftRadius:30,
    //   borderBottomRightRadius:30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
     action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
  
});