
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity,Picker,Button,FlatList, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import Cards from './main/Cardcomponent';
import Topbar from './main/Topbar';
import { useState,useEffect } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {GlobalStyles} from './Globals/globalStyles';

export default function BottomNavigator({navigation}: {navigation: any}) {
    { 
        const [pickerVal,setPicker]= useState();
        const [search,setSearch]= useState([]);
        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
        const showDatePicker = () => {
            setDatePickerVisibility(true);
          };
        
          const hideDatePicker = () => {
            setDatePickerVisibility(false);
          };
          const handleConfirm = (date) => {
            setSearch(date);
            console.log("Data picked is   " , search);
            hideDatePicker();
          };
       
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white'

            }}>
                <Topbar  {...navigation}/>
                {/* <Cards/> */}
                <Picker
                selectedValue={pickerVal}
                onValueChange={(itemValue,itemIndex)=>setPicker(itemValue)}
                >
                    <Picker.Item label="RKP" value="Developer"/>
                    <Picker.Item label="Nihith" value="RoleBased"/>
                    <Picker.Item label="Shiva" value="Tester"/>
                    <Picker.Item  label="Advith" value="Consultant"/>

                    </Picker>
                    <Button  title="Show Date Picker" onPress={showDatePicker} 
                    
                    />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
        <Text style={GlobalStyles.actionBtn}>Hello Mamba</Text>

                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: 'grey',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 35,
                    zIndex: 10
                }}>

                    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Camera')}>
                        <View style={[styles.button, styles.actionBtn]}>

                            <Image style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                                source={{ uri: 'https://img.icons8.com/plasticine/2x/camera.png' }} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{

                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                            <Image

                                style={{ width: 30, height: 30 }}

                                source={{ uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png' }}

                                onPress={()=>{Alert.alert("")}}
                            >

                            </Image>

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center'}}>Home</Text>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                    }}>

                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Menu')}
                        >
                            <Image
                                style={{  width: 30, height: 30 }}
                                source={{ uri: 'https://img.icons8.com/cute-clipart/2x/edit.png' }}
                                onPress={()=>navigation.navigate('Menu')}
                            />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center' }}>Edit </Text>
                    </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'space-between',marginStart:85,
                        }}>

                            <TouchableOpacity
                                onPress={()=>navigation.navigate('Forms')}
                            >
                                <Image
                                    source={{ uri: 'https://img.icons8.com/nolan/2x/google-forms.png' }}
                                    onPress={()=>navigation.navigate('Forms')}
                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                       
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Forms </Text>
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate('Signin')}
                            >
                                <Image
                                    source={{ uri: 'https://img.icons8.com/doodle/2x/gender-neutral-user.png' }}

                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                     
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center' }}>Profile</Text>
                           
                        </View>

                    {/* </View> */}
                </View>
            </View>
        );
    }

    
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: 'grey',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }


});
