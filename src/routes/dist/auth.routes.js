"use strict";
exports.__esModule = true;
exports.AuthRoutes = void 0;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var Home_1 = require("../screens/Home");
var SignIn_1 = require("../screens/SignIn");
var _a = stack_1.createStackNavigator(), Navigator = _a.Navigator, Screen = _a.Screen;
function AuthRoutes() {
    return (react_1["default"].createElement(Navigator, { headerMode: "none", screenOptions: {
            cardStyle: {
                backgroundColor: 'transparent'
            }
        } },
        react_1["default"].createElement(Screen, { name: "SignIn", component: SignIn_1.SignIn }),
        react_1["default"].createElement(Screen, { name: "Home", component: Home_1.Home })));
}
exports.AuthRoutes = AuthRoutes;
