import React from 'react';
import { Text, View,StyleSheet,Image} from 'react-native';

export default function CardComponent()
{
    return(
        <View>
            <Text style={styles.container}>Card Component 1</Text>
            <View >
            <Image style={{height:200,width:null,margin:10}} source={require('../assets/av.jpg')}/>
            </View>
            <View style={{height:30}}>
                
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
            <Text>Card  2</Text>
            <Text >Card  3</Text>
            <Text >Card  4</Text>

            </View>
                        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:30,
        fontStyle:'normal',backgroundColor:'white',
        color:'black',
        marginLeft:30,
        alignItems:'center',justifyContent:'center',
    },   
   
  });