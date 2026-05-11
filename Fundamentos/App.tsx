import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './rsc/components/Button';
import CustomInput from './rsc/components/CustomInput';
import { useState } from 'react';

export default function App() {

  const nombre: string="Jehanie";
  const saludar=(nombre: string, edad:string) => `bienvenido(a) ${nombre} tu edad es ${edad}`
  
  const [name,setName]= useState("")
  const [age,setAge]= useState("")
  //usestate solamente para actualixxar valores al presionar boton
  const [displayName,setDisplayName]= useState("")
  const [displayAge,setDisplayAge]= useState("")

  //lista de productos
  const productos = [
  { id: 1, nombre: 'Laptop Gamer' },
  { id: 2, nombre: 'Mouse Óptico' },
  { id: 3, nombre: 'Teclado Mecánico' },
  { id: 4, nombre: 'Monitor 4K' }
];

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{saludar(displayName,displayAge)}</Text>
      <Text style={styles.Text}>{parseInt(age)>18?"eres mayor":"eres menor"}</Text>
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
      onPress={()=>{
        //ahora tengo los valores en las variables displayname...
        setDisplayName(name);
        setDisplayAge(age);
      }}
        />
      <StatusBar style="auto" />

      <View>
        <Text style={styles.Text} >
          Lista de productos
        </Text>

        {productos.map((item) => (
    <Text key={item.id} style={styles.itemTexto}>
      • {item.nombre}
    </Text>
  ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001449',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Text:{
    fontSize: 20,
    color: 'white',
    
  },
  itemTexto:{
    fontSize:18,
    fontFamily:'bold',
    color:'green'
  }
});
