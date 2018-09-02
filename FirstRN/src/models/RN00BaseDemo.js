import BasePage from "./RN00BasePage"
import React from "react";

export default class RN00BaseDemo extends BasePage {

    static navigationOptions = () => ({
        title: "RN00"
    })


    initButtons() {
        this.buttonMap.doClickA = this.doClickA.bind(this);
        this.buttonMap.doClickB = this.doClickB.bind(this);
    }

    doClickA() {
        this.println("结果A");
    }

    doClickB() {
        this.println("结果B");
    }
}