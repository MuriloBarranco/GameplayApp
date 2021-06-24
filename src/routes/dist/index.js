"use strict";
exports.__esModule = true;
exports.Routes = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var auth_routes_1 = require("./auth.routes");
function Routes() {
    return (react_1["default"].createElement(native_1.NavigationContainer, null,
        react_1["default"].createElement(auth_routes_1.AuthRoutes, null)));
}
exports.Routes = Routes;
