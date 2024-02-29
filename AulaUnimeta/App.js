import { StatusBar } from 'expo-status-bar';
import React from'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function TextButton(){
return <Text style={{color:'orange'}}> Meu nome é  César Santos </Text>;
}

export default function App() {
  return (
    <View style={styles.container}>

    <Image source={require('./assets/favicon.png')} />

      <Text style={{color:'orange'}}> Olá Mundo! </Text>
      <StatusBar style="auto" />
      <TextButton/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
})
