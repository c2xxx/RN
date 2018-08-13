import {StackNavigator} from "react-navigation";

import Home from "./src/Home"
import Second from "./src/Second"
const RouteConfigs = {
    Home:{
        screen:Home ,
    },
    Second:{
        screen:Second ,
    }
}
const StackNavigatorConfig = {
    initialRouteName:'Home',
    initialRouteParams: {initPara: '初始页面参数'},
    navigationOptions: {
        title: '标题',
        // headerTitleStyle: {fontSize: 18, color: '#666666'},
        headerStyle: {height: 48, backgroundColor: '#fff'},
    },
    cardStyle: {backgroundColor: "#ffffff"},
}