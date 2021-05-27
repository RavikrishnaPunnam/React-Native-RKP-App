import React from 'react';
import { Text, View,StyleSheet,Platform,Image,TextInput,Modal,FlatList,ActivityIndicator, TouchableWithoutFeedback,Alert,TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import {locationData} from '../redux/store/actions'
import {useSelector,useDispatch} from 'react-redux';
import {connect} from 'react-redux';

// import { Navigation } from '../types';

// type Props = {
//     navigation: Navigation;
//   };
  
 function TopBar()
{
    const navigation = useNavigation();

    const [search,setSearch]= useState([]);
    const[searchbarvisible,setSearchbarvisible] =useState(false);

    const [description,setDesc]= useState([]);
    const [masterData,setMasterdata]= useState([]);
    const[indicator,setIndicator] =useState(true);
// Retrieving the data from Redux 
    const usestateData = useSelector(state => state);
    const mylocationData = usestateData;
    const dispatch = useDispatch();

    const getList = async ()=> {
        try {
          const response = await fetch('https://96aa71ddaa09.ngrok.io/api/users');
         // Alert.alert(response) ;
          const jsonData =await  response.json();
          console.log(jsonData);
            
                  setDesc(jsonData);   
                  setMasterdata(jsonData);
    
          console.log("Getlist calling");
          
        } catch (error) {
          console.error(error.message);
          Alert.alert(error.message) ;
        }
      }  
      useEffect(()=>{
      // getList(),[];    
      }, []);
      
   
  const searchFilterFunction = (text:any) => {
    setSearch(text);
    if(text)
    {
          //  something typed insert code
          const newData= masterData.filter((item)=>{
            const itemData = item.name? item.name.toUpperCase()
            :''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData)> -1;

          })
          setDesc(newData);
          setSearch(text);

    }
    else{
        // nothing typed insert same list
        setDesc(masterData);
        setSearch(text);
    }
  };
  const [location, setLocation] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  let locationValue : any;

  useEffect(()  => {
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
      locationValue = await Location.getCurrentPositionAsync();
    //  setLocation(location);
       setIndicator(false);
       // saving the data into the redux store
      dispatch(locationData(locationValue));

     // console.log(" locationdata" , mylocationData.location.coords);
    })();
  }, []);
 
  let text : any;
  let text2 : any;
  let data:any;
let info:any;

  if (mylocationData.location ) {     
 
      console.log(" MY latitude 1" ,mylocationData.location.coords.latitude);    
   text=mylocationData.location.coords.latitude;
   text2=mylocationData.location.coords.longitude;
   console.log(text);  
   console.log(text2);   
}
else{
  text = errorMsg;
}

    return(
       <View>
           
        <View style={{marginTop:30}}>
       
            {/* <Text style={styles.container}>TopBar Component</Text> */}
            <View style={{height:30}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableWithoutFeedback onPress={() => setSearchbarvisible(true)}>
                    
            <Image
            style={{ width: 30, height: 30,marginLeft:10}}
                source={{ uri: 'http://simpleicon.com/wp-content/uploads/active-search.png' }}
                    />
                    </TouchableWithoutFeedback>  
                   
                    <Text style={{fontSize:20,fontWeight:'bold'}} >TopBar</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Geolocation')}>

                    <Image
              style={{ width: 30, height: 30,marginRight:10 }}
                  source={{ uri: 'https://img.icons8.com/ios/2x/navigation.png' }}
                       />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal style={{marginTop:30}} visible={searchbarvisible}  transparent>
                
            <SearchBar
                             searchIcon={{ size: 24 }}
                               placeholder="Type Here..."
                                onChangeText={(text) => searchFilterFunction(text)}
                                onClear={() => setSearchbarvisible(false)}
                                 value={search}
                                 clearIcon={{size: 24}}
                                    />  
                                    
            </Modal>
        </View>
        <ActivityIndicator animating={indicator}   color = 'red'
               size = "large"/>
        <FlatList 
      data={description}
      renderItem={({item})=>(
        <TouchableOpacity 
        // onPress={()=>navigation.navigate('Details',item)}
        >
          <Text style={{marginLeft:30,fontSize:24,fontWeight:'bold',marginTop:25}}>
            {item.name}
          </Text>
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

        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      />
           </View>
    )
}
function mapStateToProps(state)
{
    return{
        xyz:state.counter
    }
}
export default connect(mapStateToProps)(TopBar);
const styles = StyleSheet.create({
    container: {
        marginTop:30,fontStyle:'normal',color:'black',marginLeft:30
    },
     action: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
   
  });