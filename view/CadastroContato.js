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

export const CadastroContato = () => {
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
          <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => navigation.navigate('ListarContato')}>Salvar</Button>
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