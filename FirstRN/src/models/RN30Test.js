import BasePage from "./RN00BasePage"
import React from "react";

export default class RN30Test extends BasePage {

    static navigationOptions = () => ({
        title: "RN30Test"
    })


    initButtons() {
        this.buttonMap.测试 = this.doClickA.bind(this);
    }

    doClickA() {
        // let msg = {online: 3};
        let message04 = {
            properties: '{"online":0}',
            id: 'f085c10f8dcd',
            productId: 'N7N8DesO'
        }
        let propertiesJson = eval('(' + message04.properties + ')');
        this.println("type=" + typeof message04);
        this.println("is object=" + (typeof message04 === "object"));
        this.println("" + (message04.properties));
        this.println("是否存在online：" + (propertiesJson.online !== undefined));
        this.println("online=" + (propertiesJson.online));
        this.println("是否存在cmdInfo：" + (propertiesJson.cmdInfo !== undefined));
        this.println("cmdInfo=" + (propertiesJson.cmdInfo));
    }

}