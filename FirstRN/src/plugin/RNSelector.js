import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import ToastUtil from "../utils/ToastUtil";
import SWPluginSelector from "./SWPluginSelector";

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;

const itemHeight = 50;
export default class RNSelector extends Component<Props> {

    static navigationOptions = {
        title: "选择器"
    }

    items = ['1张三', '2李四', '王五', '赵六', '张三', '李四', '王五', '赵六', '张三', '李四', '王五', '赵六', '张三', '李四', '2王五', '赵六', '1憋七']
    items1 = ['1张三', '2李四', '王五']

    doClick() {
        ToastUtil.show('click')
        this.selector.show();
    }

    selector


    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <ScrollView>
                    <TouchableOpacity
                        style={style.btn}
                        onPress={() => {
                            this.doClick()
                        }}>
                        <Text style={style.btnText}>Click1</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Text>这是最底下的文字A</Text>
                <Text>这是最底下的文字B</Text>
                <Text>宽高{screenW}x{screenH}</Text>
                <SWPluginSelector
                    data={this.items}
                    title={'标题'}
                    cancelable={true}
                    renderText={(item) => {
                        return item
                    }}
                    onClickItem={(item, index) => {
                        ToastUtil.show("index=" + index)
                    }}
                    ref={component => this.selector = component}/>
            </View>
        )
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