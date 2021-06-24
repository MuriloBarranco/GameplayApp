import React, { Fragment } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

// import { SingIn } from './src/screens/SignIn';
import { Routes } from './src/routes';
import { Background } from './src/components/Background';


export default function App() {
  const [ fontsLoaded ] =  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });
  //enquanto as fontes nao carregarem, deixa a tela de splash de amostra  
  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <Background>
      <StatusBar // para deixar a statusbar branca
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
      /> 
      <Routes />
    </Background> 
  );
}


