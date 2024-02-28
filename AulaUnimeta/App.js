import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function TextButton(){
return <Text style={{color:'white'}}> Meu nome é  César Santos </Text>;
}

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={{color:'orange'}}> Olá Mundo! </Text>
      <StatusBar style="auto" />
      <TextButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',


  },
})
