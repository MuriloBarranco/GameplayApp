"use strict";
exports.__esModule = true;
exports.SignIn = void 0;
//AQUI EU ENVIO TUDO PARA O APP.JSON
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var illustration_png_1 = require("../../assets/illustration.png");
var styles_1 = require("./styles");
var ButtonIcon_1 = require("../../components/ButtonIcon");
function SignIn() {
    var navigation = native_1.useNavigation();
    function handleSignIn() {
        navigation.navigate('Home');
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.container },
        react_1["default"].createElement(react_native_1.Image, { source: illustration_png_1["default"], style: styles_1.styles.image, resizeMode: "stretch" // para q a imagem fica bem ajustada de tamanho
         }),
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.content },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.title },
                "Conecte-se ", "\n",
                "e organize suas ", "\n",
                "jogatinas"),
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.subtitle },
                "Crie grupos para jogar seus games ", "\n",
                "favoritos com seus amigos ", "\n"),
            react_1["default"].createElement(ButtonIcon_1.ButtonIcon, { title: "Entrar com Discord", activeOpacity: 0.7, onPress: handleSignIn }))));
}
exports.SignIn = SignIn;
