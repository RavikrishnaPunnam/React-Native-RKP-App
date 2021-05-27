import React from 'react';
import { useState,useEffect } from 'react';
import {StyleSheet,Text, View,Button,FlatList,TouchableOpacity ,TextInput,Modal,Alert} from 'react-native';
import axios from 'axios';
export default function Forms({navigation}: {navigation: any})
{
const[popupOpen,setPopup] =useState(false);
  const [description,setDesc]= useState([]);
  const [newName,setVal]= useState([
    {name:'',company:'',jd:'',age: '',key:''},

  ]);
  const getList = async ()=> {
    try {
      const response = await fetch('https://d706116ce29d.ngrok.io/users');
     // Alert.alert(response) ;
      const jsonData =await  response.json();
      console.log(jsonData);
        
              setDesc(jsonData);   

      console.log("Getlist calling");
      
    } catch (error) {
      console.error(error.message);
      Alert.alert(error.message) ;
    }
  }  
  useEffect(()=>{
    getList(),[];    
  }, []);
  

  const submitHandler =(val)=>
  {
   // console.log( val);
    console.log(newName);
    setPopup(false);
    setDesc((prevTodos)=>{
      console.log(prevTodos);

      return [
        {name:newName.name,company:newName.company,jd:newName.jd,age:newName.age},
        // this is a spread operator
        ...prevTodos
      ]
    })
    console.log(newName);
    // const response =  fetch("http://ff0eab9e0b4b.ngrok.io/myform",
    // {
    //   method:"POST",
    //   headers:{"Content-Type": "application/json"},
    //   body: JSON.stringify(newName)
      
    // });
    axios.post('https://d706116ce29d.ngrok.io/myform', newName)
    .then(response => console.log(response))
    .catch(error => {
        console.error('There was an error!', error);
    });
    //console.log(description);

  }
  const changeNameHandler= (val)=>
  {
    console.log(val);
    setVal({ name:val});
  }
  const changeCompanyHandler= (val)=>
  {
    console.log(val);
    setVal({...newName, company:val});
  }
  const changeJDHandler= (val)=>
  {
    console.log(val);
    setVal({...newName,jd:val});
  }
  const changeAgeHandler= (val)=>
  {
    console.log(val);
    setVal({...newName,age:val});
  }
  return (
    <View>
      <Button style={styles.button} title='+' onPress={()=>setPopup(true)}></Button>
      <Modal visible={popupOpen}       
        animationType="fade">
      <View>
      <Button style={styles.button} title='X' color='red' onPress={()=>setPopup(false)} ></Button>

      <TextInput style = {styles.input}
            placeholder='Enter Name'
            onChangeText={changeNameHandler}
                        />
            <TextInput style = {styles.input}
            placeholder='Enter Company'
            onChangeText={changeCompanyHandler}

            />
            <TextInput style = {styles.input}
            placeholder='Enter JD'
            onChangeText={changeJDHandler}

            />
             <TextInput style = {styles.input}
            placeholder='Enter Age'
            onChangeText={changeAgeHandler}
            keyboardType='number-pad'

            />

<Button style={styles.button} title='Submit' onPress={submitHandler} fontWeight=''></Button>

      </View>
      </Modal>
      <FlatList 
      data={description}
      renderItem={({item})=>(
        <TouchableOpacity 
        // onPress={()=>navigation.navigate('Details',item)}
        >
          <Text style={styles.container}>
            {item.name}
          </Text>

        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      />
      {/* <View style={styles.buttonContainer}>
        <Text>Hello 1</Text>
        <Text>Hello 2</Text>
        <Text>Hello 3</Text>

      </View> */}
     
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
  
  },buttonContainer: {
    marginTop: 42,position:'absolute',
    flexDirection:'row',
    justifyContent:'space-between', 
    alignItems:'center',backgroundColor:'coral',height:50

    },
  });
  