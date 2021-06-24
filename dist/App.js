"use strict";
exports.__esModule = true;
var react_1 = require("react");
var expo_font_1 = require("expo-font");
var react_native_1 = require("react-native");
var inter_1 = require("@expo-google-fonts/inter");
var rajdhani_1 = require("@expo-google-fonts/rajdhani");
var expo_app_loading_1 = require("expo-app-loading");
// import { SingIn } from './src/screens/SignIn';
var routes_1 = require("./src/routes");
function App() {
    var fontsLoaded = expo_font_1.useFonts({
        Inter_400Regular: inter_1.Inter_400Regular,
        Inter_500Medium: inter_1.Inter_500Medium,
        Rajdhani_500Medium: rajdhani_1.Rajdhani_500Medium,
        Rajdhani_700Bold: rajdhani_1.Rajdhani_700Bold
    })[0];
    //enquanto as fontes nao carregarem, deixa a tela de splash de amostra  
    if (!fontsLoaded) {
        return <expo_app_loading_1["default"] />;
    }
    return (<>
      <react_native_1.StatusBar // para deixar a statusbar branca
     barStyle="light-content" backgroundColor="transparent" translucent/> 
      <routes_1.Routes />
    </>);
}
exports["default"] = App;
