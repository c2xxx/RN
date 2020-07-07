import React, {Component} from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import ToastUtil from "../utils/ToastUtil";

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;

const itemHeight = 50;
export default class RNSelectorXX extends Component<Props> {

    static navigationOptions = {
        title: "选择器"
    }

    state = {
        showing: false
    }

    items = ['1张三', '2李四', '王五', '赵六', '张三', '李四', '王五', '赵六', '张三', '李四', '王五', '赵六', '张三', '李四', '2王五', '赵六', '1憋七']
    items1 = ['1张三', '2李四', '王五']

    doClick() {
        ToastUtil.show('click')
        this.show();
    }


    render() {
        let maxListHeight = screenH - 300;
        let listHeight = this.items.length * itemHeight;
        listHeight = listHeight <= maxListHeight ? listHeight : maxListHeight;
        return (
            <View style={{backgroundColor: '#ccc', flex: 1}}>
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


                {/*占领全屏*/}
                {
                    this.state.showing && < View

                        style={{
                            position: 'absolute',
                            height: screenH,
                            width: screenW,
                            zIndex: 2,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                        }}>
                        {/*占领实际可用区域*/}
                        <View style={{
                            height: screenH - 90,
                            width: screenW,
                        }}>
                            <View style={{flex: 1}}></View>
                            {/*占领实际使用区域*/}
                            <View style={{
                                backgroundColor: "white",
                                alignItems: 'center',
                                borderRadius: 15,
                                marginHorizontal: 20
                            }}>
                                <Text style={{paddingVertical: 10, fontSize: 20}}>标题</Text>
                                {/*占领flatList区域*/}
                                <View style={{
                                    width: screenW - 20,
                                    height: listHeight,
                                    backgroundColor: "#EEE"
                                }}>
                                    <FlatList
                                        renderItem={this.renderItem.bind(this)}
                                        data={this.items}
                                        keyExtractor={(item, index) => `key${index}`}
                                        numColumns={1}/>
                                </View>
                                <TouchableOpacity
                                    onPress={this.doCancel.bind(this)}

                                >
                                    <View style={{
                                        alignItems: 'center',
                                        borderBottomRightRadius: 15,
                                        borderBottomLeftRadius: 15,
                                        width: screenW - 40,
                                        paddingVertical: 10,
                                    }}>
                                        <Text style={{fontSize: 20,}}>取消</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{height: 10}}></View>
                        </View>
                    </View>
                }
                <Text>这是最底下的文字B</Text>
                <Text>宽高{screenW}x{screenH}</Text>
            </View>
        )
    }

    show() {
        this.setState({
            showing: true
        })
    }

    dismiss() {
        this.setState({
            showing: false
        })
    }

    doCancel() {
        this.dismiss()
    }

    doClickItem(item, index) {
        this.dismiss();
        ToastUtil.show(`${item}index=${index}`)
    }

    renderText(item, index) {
        return `${index}、${item}`
    }

    renderItem({item, index}) {
        console.log('item=', item)
        let text = this.renderText(item, index);
        return (
            <View style={{
                marginHorizontal: 20,
                height: itemHeight
            }}>
                {
                    index === 0 && (
                        <View style={{height: 1, marginHorizontal: 20}}></View>
                    )
                }
                {
                    index !== 0 && (
                        <View style={{height: 1, backgroundColor: "#ccc", marginHorizontal: 20}}></View>
                    )
                }
                <TouchableOpacity
                    style={{
                        flex: 1,
                    }}
                    onPress={() => {
                        this.doClickItem(item, index)
                    }}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                        }}>
                        <Text style={{fontSize: 20}}>{text}</Text>
                    </View>
                </TouchableOpacity>
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