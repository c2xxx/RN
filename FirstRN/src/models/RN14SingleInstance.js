import BasePage from "./RN00BasePage"
import AppStatusManager from "./../utils/AppStatusManager"

export default class RN14SingleInstance extends BasePage {

    static navigationOptions = () => ({
        title: "RN14单例"
    })

    doClick() {
        let instance = AppStatusManager.getInstance();
        this.println("")
        this.println("add    " + instance.add(10, 5))
        this.println("sub    " + instance.sub(10, 5))
        this.println("name   " + instance.getName())
        this.println("createTime   " + instance.createTime)
        this.println("appName1   " + instance.appName)
        this.println("appName2   " + AppStatusManager.appName)
    }
}