import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

    export const GlobalStyles = StyleSheet.create({

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
            shadowRadius: 2,
            borderRadius: 30,
            position: 'absolute',
            bottom: 20,
            right: 0,
            top: 5,
            left: 5,
    
        },
        actionBtn: {
    
            backgroundColor: 'grey',
            textShadowOffset: { width: 5, height: 5 },
            textShadowRadius: 10,
            borderWidth: 2,
            borderColor: '#fff'
    
    
        }
    
    
    });
