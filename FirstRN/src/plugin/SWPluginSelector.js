import React, {Component} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from "react-native"
import ToastUtil from "../utils/ToastUtil";

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;

const itemHeight = 50;
export default class SWPluginSelector extends Component<Props> {

    //用法：
    demo() {
        return (
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
        )
    }


    defaultProps = {
        data: [],
        cancelable: false,
        title: '',//标题
        renderText: (item, index) => {
            return `${item}`
        },
        onClickItem: (item, index) => {
        }
    }

    state = {
        showing: false
    }


    render() {
        let data = this.props.data;
        let maxListHeight = screenH - 300;
        let listHeight = data.length * itemHeight;
        listHeight = listHeight <= maxListHeight ? listHeight : maxListHeight;
        if (!this.state.showing) {
            return <View/>
        }
        {/*占领全屏*/
        }
        console.log('this.props.cancelable=', this.props.cancelable, this.props.title, this.props.data)
        return (
            < View
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
                        <Text
                            style={{
                                paddingVertical: 10,
                                fontSize: 20
                            }}>{this.props.title}{this.props.cancelable}</Text>
                        {/*占领flatList区域*/}
                        <View style={{
                            width: screenW - 20,
                            height: listHeight,
                            backgroundColor: "#EEE"
                        }}>
                            <FlatList
                                renderItem={this.renderItem.bind(this)}
                                data={data}
                                keyExtractor={(item, index) => `key${index}`}
                                numColumns={1}/>
                        </View>
                        {
                            this.props.cancelable && (
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
                            )
                        }
                    </View>
                    <View style={{height: 10}}></View>
                </View>
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

    _doClickItem(item, index) {
        this.props.onClickItem(item, index);
        this.dismiss();
    }


    renderItem({item, index}) {
        // console.log('item=', item)
        let text = this.props.renderText(item, index);
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
                        this._doClickItem(item, index)
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