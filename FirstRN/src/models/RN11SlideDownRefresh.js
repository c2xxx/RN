import React, {Component} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native"
import MyTouchableOpacity from "../views/MyTouchableOpacity"

export default class RN11SlideDownRefresh extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = ({
            refreshing: false,
        });
        this._onRefresh = this._onRefresh.bind(this);
    }

    static navigationOptions = {
        title: "RN11下拉刷新"
    }


    doClick() {

    }

    _onRefresh() {
        console.log("下拉刷新")
        this.setState({
            refreshing: true,
        });
        setTimeout(() => {
            this.endRefresh();
        }, 2500)
    }

    endRefresh() {
        console.log("刷新结束")
        this.setState({
            refreshing: false,
        });
    }

    render() {
        return <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
            }>
            <TouchableOpacity
                style={style.btn}
                onPress={this._onRefresh}>
                <Text style={style.btnText}>刷新</Text>
            </TouchableOpacity>
        </ScrollView>
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    btn: {
        margin: 10,
        backgroundColor: "#aacc66"
    },
})