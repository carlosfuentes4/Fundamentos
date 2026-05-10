import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './rsc/components/Button';
import CustomInput from './rsc/components/CustomInput';
import { useState } from 'react';

export default function App() {

  const nombre: string="Jehanie";
  const saludar=(nombre: string) => `bienvenido(a) ${nombre}`
  
  const [name,setName]= useState("")
  const [age,setAge]= useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{saludar(nombre)}</Text>
      <CustomInput 
      type={'name'} 
      placeholder={'nombre'} 
      value={name} 
      onChange={setName } 
      />
      <CustomInput 
      type={'age'} 
      placeholder={'edad'} 
      value={age} 
      onChange={setAge } 
      />
      
      <Button 
      title={'actualizar' }
      onPress={()=> {
        console.log("hoala")
        }}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Text:{
    fontSize: 20,
    
  },
});
