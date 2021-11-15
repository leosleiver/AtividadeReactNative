import React from "react"
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Image,
  Button,
} from "native-base"
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native-elements'
import axios from "axios";

export const AlterarCadastro = () => {

    function alterarDados(){

        axios.put('http://professornilson.com/testeservico/clientes/'+getId
        ,
        
        {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf 
    }).then(function (response) {
        console.log(response);
        }).catch(function (error) {
        console.log(error);
        
        });
        
        }


    const navigation = useNavigation(); 
    return (

        
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
<Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'Contatos', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>  
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Nome</FormControl.Label>
          <Input type="text" placeholder=""/>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input type="email" placeholder="" />
          <FormControl.Label>Telefone</FormControl.Label>
          <Input type="text" placeholder="" />
          <Button size="sm" variant="solid" marginTop ="5px" onPress={()=>{ alterarDados()}}>Salvar</Button>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CadastroContato />
      </Center>
    </NativeBaseProvider>
  )
}