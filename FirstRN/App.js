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

const MyDemoApp = StackNavigator({
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