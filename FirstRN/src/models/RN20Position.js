import BasePage from "./RN00BasePage"
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export default class RN20Position extends BasePage {

    static navigationOptions = () => ({
        title: "20定位"
    })


    doClick() {
        this.println("定位");
    }


    render() {
        return <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.btnBorder}
                    onPress={() => {
                        this.doClick()
                    }}>
                    <Text style={styles.text1}>Click</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnBorder}
                    onPress={() => {
                        this.doClick()
                    }}>
                    <Text style={styles.text1}>Click</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnBorder}
                    onPress={() => {
                        this.clearScreen()
                    }}>
                    <Text style={styles.text1}>ClearScreen</Text>
                </TouchableOpacity>
                <Text>
                    {this.state.content}
                </Text>
            </ScrollView>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#ddd"
    },
    text1: {
        fontSize: 30,
        textAlign: 'center',
    },
    btnBorder: {
        margin: 10,
        backgroundColor: "#99aa77"
    }
})