import React, {useState, useEffect}from "react"
import {  Box,  FlatList,  Heading,  Avatar, View, HStack,  VStack,  Text,  Spacer,  Center,  NativeBaseProvider,Button} from "native-base"
import { Header } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { ListItem } from "react-native-elements/dist/list/ListItem";

export const ListarContato = () => {

  const navigation = useNavigation(); 
  const [dados,setDados] = useState([]);

  function excluirDados(){

    axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
    
    .then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }

  function consultarDados(){
    

    axios.get('http://professornilson.com/testeservico/clientes')
    
    .then(function (response) {
    console.log(response);
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }

  useEffect(() => {

    function resgatarDados(){
      // Make a request for a user with a given ID
axios.get('http://professornilson.com/testeservico/clientes')
.then(function (response) {
    setDados(response.data);
    console.log(response);
})
.catch(function (error) {
  console.log(error);
});
    }
      

  
  
  },[])

  
  return (
    <View>
 {

   
    dados.map((l,i) => (
    <ListItem key={i}  bottomDivider>
      <Avatar source={{uri : 'https://p.kindpng.com/picc/s/78-786678_avatar-hd-png-download.png'}}/>
      <ListItem.Content>
        <ListItem.Title>{l.nome}</ListItem.Title>
        <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
      </ListItem.Content>
      
       </ListItem>
 
 
   )) 
    }
   </View>  
 
       
     )

}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex="1" >
        <ListarContato />
      </Center>
    </NativeBaseProvider>
  )
}