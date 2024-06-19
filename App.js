//import AppNavigator from "./src/navigation/AppNavigator";
import React, { useState, useEffect } from 'react';
import {Text, View, Button } from 'react-native'; 
import * as Location from 'expo-location';
import { styles } from './src/config/styles';



export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await 
      Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de acesso à localização negada');
        return;
       }
       
       let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
     })();

     const intervalId = setInterval(() => {
      getLocation();
     }, 30000);

     return () => clearInterval(intervalId)


     }, []);

     const getLocation = async () => { 
      let location = await Location.getCurrentPositionAsync({});
       setLocation(location);
       console.log("feito");
    };
     
     let text = 'Aguardando...'; 
     if (errorMsg) { 
      text = errorMsg; 
    } else if (location) { 
      text = `Latitude: ${location.coords.latitude}, Longitude: 
      ${location.coords.longitude}`; 
    }

  return (
    <View style={styles.container}> 
      <Text style={styles.paragraph}>{text}</Text>
      <Button title="Atualizar Localização" onPress={getLocation} /> 
      </View>
  );
}


