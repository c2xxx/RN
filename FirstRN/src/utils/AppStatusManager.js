import MyTool from "./MyUtils"

let instance = null;
let name = "";

export default class AppStatusManager {

    static appName="firstRN 类变量";
    appName="firstRN 成员变量";

    constructor() {
        if (!instance) {
            instance = this;
        }
        this.createTime = MyTool.getTime();
        return instance;
    }

    static getInstance() {
        return new AppStatusManager();
    }

    getName() {
        return "张三"
    }

    add(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }
}