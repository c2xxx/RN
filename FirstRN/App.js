import {StackNavigator,} from "react-navigation";
import React from 'react';

import Home from "./src/Home"
import Second from "./src/Second"
import RN01SimplePage from "./src/models/RN01SimplePage"
import RN02PageLife from "./src/models/RN02PageLife"
import RN03NativeCode from "./src/models/RN03NativeCode"
import RNStudy04Image from "./src/models/RN04Image"
import RN07WebView from "./src/models/RN07WebView"
import RN06Http from "./src/models/RN06Http"
import RN05Video from "./src/models/RN05Video"
import RN09ReWriteVIew from "./src/models/RN09ReWriteVIew"
import RN11SlideDownRefresh from "./src/models/RN11SlideDownRefresh"
import RN12ListView from "./src/models/RN12ListView"
import RN13MyToolClass from "./src/models/RN13MyToolClass"
import RN14SingleInstance from "./src/models/RN14SingleInstance"
import RN15SubPage from "./src/models/RN15SubPage"
import RN00BasePage from "./src/models/RN00BasePage"
import RN00Menu from "./src/models/RN00Menu"
import RN00 from "./src/models/RN00"

const MyDemoApp = StackNavigator({
    RN09Navigation: {screen: RN09ReWriteVIew},
    RN15SubPage: {screen: RN15SubPage},
    RN14SingleInstance: {screen: RN14SingleInstance},
    RN00BasePage: {screen: RN00BasePage},
    RN12ListView: {screen: RN12ListView},
    RN00Menu: {screen: RN00Menu},
    RN11SlideDownRefresh: {screen: RN11SlideDownRefresh},
    RN13MyToolClass: {screen: RN13MyToolClass},
    RN00: {screen: RN00},
    RN05Video: {screen: RN05Video},
    RN01SimplePage: {screen: RN01SimplePage},
    RN02PageLife: {screen: RN02PageLife},
    RN03NativeCode: {screen: RN03NativeCode},
    RN04Image: {screen: RNStudy04Image},
    RN06Http: {screen: RN06Http},
    RN07WebView: {screen: RN07WebView},
    Home: {screen: Home},
    Second: {screen: Second},
});

const AppNavigation = () => {
    return <MyDemoApp/>
}
export default class App extends React.Component {
    render() {
        return (<AppNavigation/>);
    }
};