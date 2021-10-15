import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from './view/Login';
import ListarContato from './view/ListarContato';
import CadastroContato from './view/CadastroContato';
import AlterarCadastro from './view/AlterarCadastro';
import CadastroUser from './view/CadastroUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ListarContato" component={ListarContato}/>
        <Stack.Screen name="CadastroContato" component={CadastroContato}/>
        <Stack.Screen name="AlterarCadastro" component={AlterarCadastro}/>
        <Stack.Screen name="CadastroUser" component={CadastroUser}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

