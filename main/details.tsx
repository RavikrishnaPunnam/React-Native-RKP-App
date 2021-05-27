import {Assets, createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import React from 'react';
import { useState } from 'react';
import { Text, View,StyleSheet} from 'react-native';

export default  function DetailsScreen({route})
{
  let data = route.params;
  return (
    <View style={styles.container}>
      <Text>{data.name} </Text>
      <Text>{data.company} </Text>
      <Text>{data.jd} </Text>
      <Text>{data.age} </Text>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding:16,
    marginTop:16,
    borderColor:'#bbb',
    borderWidth:1,
    borderStyle: 'dashed',
    borderRadius:30,
    
  },
  button:{
    fontSize:400,
    flex:1,
    alignSelf:'center',
    padding:30
  },
  input : {
    marginBottom:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    borderStyle: 'dashed',
    borderRadius:10

}
});