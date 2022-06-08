import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const FrontPage = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>Bamboozled!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.circle}> 
      
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}> 
        <Text style={styles.lf}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:250,
    height:100,
    backgroundColor:'#C4C4C4',
    marginTop: 60
  },

  circle: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    borderRadius:100,
    backgroundColor:'#C4C4C4',
    marginTop: 20,
  },

  lf: {
    fontSize: 27.5
  }
});

export default FrontPage;