import {
    StackNavigator, TabBarBottom, TabNavigator,
} from "react-navigation";
import React, {Component} from 'react';

import Home from "./src/Home"
import Second from "./src/Second"


const MyDemoApp = StackNavigator({
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