import {Assets, createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import React from 'react';
import { useState } from 'react';
import { Text, View,StyleSheet, TextInput, Image, Dimensions,TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';
import {addtion,subtraction} from '..//redux/store/actions'
const {width,height}= Dimensions.get('window');
 function signInscreen({navigation}: {navigation: any})
{
  const data = useSelector(state => state);
  const {counter,name} = data;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
        <View style={{ ...StyleSheet.absoluteFill }}>

          <Image source={require('../assets/bg.jpg')}
           style={{flex:1,height:null,width:null}}
          />
        </View> 
        <View style={styles.counterValue}>
         <View style={{flexDirection:'column',width:200,justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={()=>dispatch(addtion())}
                    >
                        
                <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Increase</Text>
                
                </TouchableOpacity>

                <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>{counter}</Text>
                <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>{name}</Text>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Hello All</Text>
                
                <TouchableOpacity onPress={()=>dispatch(subtraction())}>

                <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Decrease</Text>
                
                </TouchableOpacity>
                </View>
          
        </View>
      <View style={{height:height/3}}>
        <View style={{...styles.button,...styles.colour}}>
          <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>SIGN IN</Text>
        </View>
       
      </View>
        
          </View>
  )
}
function mapStateToProps(state)
{
    return{
        xyz:state.counter
    }
}
export default connect(mapStateToProps)(signInscreen);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'white',
    justifyContent:'flex-end'
  },
  button:{
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  colour:{
    backgroundColor:'#2E71DC'
  }
  ,counterValue:{
    alignItems: 'center',
    justifyContent: 'center',
  }

  
});