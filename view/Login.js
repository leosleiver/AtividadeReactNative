import React, {useState} from "react"
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
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {

  const [email,setEmail] = useState(""); 
  const [senha,setSenha] = useState("");
  
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};
const app = initializeApp(firebaseConfig);

function loginFireBase (){
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    navigation.navigate('ListarContato');
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log('Não conectado')
    const errorCode = error.code;
    const errorMessage = error.message;
  });

};

    const navigation = useNavigation(); 
    return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
      <FormControl isRequired>
        <Stack mx="4">
          <Center>
          <Image
            source={{
              uri: "https://www.kindpng.com/picc/m/75-754395_transparent-login-icons-png-business-user-png-download.png",
                    }}
               alt="Alternate Text"
              size="lg"
          />
          </Center>
          <FormControl.Label>Login</FormControl.Label>
          <Input type="text" placeholder="insira seu email" value={email}  onChangeText={email => setEmail(email)}/>
          <FormControl.Label>Senha</FormControl.Label>
          <Input type="password" placeholder="insira sua senha" values={senha} onChangeText={senha => setSenha(senha)}/>
          <FormControl.HelperText>
            Sua senha deve conter 6 caracteres.
          </FormControl.HelperText>
          <Button size="sm" variant="subtle" marginTop ="5px" onPress={()=>{ loginFireBase()}}>LOGIN</Button>
          <Button colorScheme="danger" marginTop ="5px" onPress={() => navigation.navigate('CadastroUser')}>CADASTRE-SE</Button>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Senha incorreta.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Login />
      </Center>
    </NativeBaseProvider>
  )
}