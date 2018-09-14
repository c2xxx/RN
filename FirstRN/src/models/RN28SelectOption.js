import React, {Component} from 'react';
import {ScrollView, StyleSheet} from "react-native"

import {ActionItem, CellSheet} from "react-native-cell-components";

export default class RN28SelectOption extends Component<Props> {

    static navigationOptions = {
        title: "28选择"
    }


    state = {
        noDisturb: "20:00-06:00"
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

    render() {
        return <ScrollView>
            <CellSheet
                title={'麦克风关闭时长'}
                disclosure={'chevron-right'}
                value={this.state.noDisturb}
                cancelText={'关闭'}
                onPress={() => {

                }}>
                {this.renderNoDisturbTypes()}
            </CellSheet>
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