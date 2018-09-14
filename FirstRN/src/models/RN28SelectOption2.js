import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native"

import {ActionItem, ActionSheet} from "react-native-cell-components";

export default class RN28SelectOption2 extends Component<Props> {

    static navigationOptions = {
        title: "28选择2"
    }


    state = {
        noDisturb: "20:00-06:10"
    }

    doClick() {

    }

    renderNoDisturbTypes() {
        const items = [
            "22:00-07:30",
            "20:00-06:00",
            "00:00-09:00",
            "全天",
        ];


        return items.map((value, i) => {
            return (
                <ActionItem
                    key={'version-' + i}
                    title={value}
                    onPress={() => {
                        this.setState({
                            noDisturb: value
                        })
                    }}/>
            )
        })
    };

    open() {
        this._actionSheet.open();
    }

    close() {
        this._actionSheet.close();
    }

    _actionSheet;

    render() {
        return <ScrollView>
            <Text>当前值：{this.state.noDisturb}</Text>
            <TouchableWithoutFeedback
                onPress={() => {
                    this.open()
                }}>
                <Text style={{height: 100, backgroundColor: '#ddd'}}>打开</Text>
            </TouchableWithoutFeedback>

            {/*<CellSheet*/}
            {/*title={'麦克风关闭时长'}*/}
            {/*disclosure={'chevron-right'}*/}
            {/*value={this.state.noDisturb}*/}
            {/*cancelText={'关闭'}*/}
            {/*onPress={() => {*/}

            {/*}}>*/}
            {/*{this.renderNoDisturbTypes()}*/}
            {/*</CellSheet>*/}
            <View>

                <ActionSheet
                    ref={component => this._actionSheet = component}
                    mode={this.props.mode}
                    cancelText={this.props.cancelText || 'Cancel'}
                    title={'请选择家庭'}>
                    {this.renderNoDisturbTypes()}
                </ActionSheet>
            </View>
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