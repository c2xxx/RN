import {StackNavigator,} from "react-navigation";
import React from 'react';


import HomePage from "./src/HomePage"
import ContentPage from "./src/ContentPage"

const MyDemoApp = StackNavigator({
    Home: {screen: HomePage},
    Content: {screen: ContentPage},
});

const AppNavigation = () => {
    return <MyDemoApp/>
}
export default class App extends React.Component {
    render() {
        return (<AppNavigation/>);
    }
};