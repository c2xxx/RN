import {StackNavigator,} from "react-navigation";
import React from 'react';

import Home from "./Home"
import Second from "./Second"
import RN01SimplePage from "./models/RN01SimplePage"
import RN02PageLife from "./models/RN02PageLife"
import RN03NativeCode from "./models/RN03NativeCode"
import RNStudy04Image from "./models/RN04Image"
import RN07WebView from "./models/RN07WebView"
import RN06Http from "./models/RN06Http"
import RN05Video from "./models/RN05Video"
import RN09ReWriteVIew from "./models/RN09ReWriteVIew"
import RN11SlideDownRefresh from "./models/RN11SlideDownRefresh"
import RN12ListView from "./models/RN12ListView"
import RN13MyToolClass from "./models/RN13MyToolClass"
import RN14SingleInstance from "./models/RN14SingleInstance"
import RN15SubPage from "./models/RN15SubPage"
import RN16MyConfirmDialog from "./models/RN16MyConfirmDialog"
import RN17MultiClick from "./models/RN17MultiClick"
import RN18Modal from "./models/RN18Modal"
import RN19IconsSimple from "./models/RN19IconsSimple"
import RN19IOIcons from "./models/RN19IOIcons"
import RN19IconCell from "./models/RN19IconCell"
import RN20Position from "./models/RN20Position"
import RN21Chat from "./models/RN21Chat"
import RN22GroupCell from "./models/RN22GroupCell"
import RN00BasePage from "./models/RN00BasePage"
import RN00Menu from "./models/RN00Menu"
import RN00 from "./models/RN00"

const MyDemoApp = StackNavigator({
    Home: {screen: Home},
    RN20Position: {screen: RN20Position},
    RN21Chat: {screen: RN21Chat},
    RN22GroupCell: {screen: RN22GroupCell},
    RN19IconCell: {screen: RN19IconCell},
    RN19IconsSimple: {screen: RN19IconsSimple},
    RN19IOIcons: {screen: RN19IOIcons},
    RN18Model: {screen: RN18Modal},
    RN16MyConfirmDialog: {screen: RN16MyConfirmDialog},
    RN17DoubleClick: {screen: RN17MultiClick},
    RN09ReWriteVIew: {screen: RN09ReWriteVIew},
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