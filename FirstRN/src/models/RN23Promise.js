import BasePage from "./RN00BasePage"
import React from "react";

export default class RN23Promise extends BasePage {

    static navigationOptions = () => ({
        title: "23 Promise"
    })


    initButtons() {
        this.buttonMap.promise = this.promise.bind(this);
        this.buttonMap.有异常的Promise = this.promiseErr.bind(this);
        this.buttonMap.有异常的未捕获的Promise = this.promiseErrNoCatch.bind(this);
        this.buttonMap.取有缓存的值 = this.getValue.bind(this);
    }

    getValue() {
        this.doGetValue("A")
            .then(response => {
                this.println(response)
            })
        this.doGetValue("B")
            .then(response => {
                this.println(response)
            })
    }

    doGetValue(needValue) {
        let valueA = "这个值来自本地";
        //达到某个条件，比如不为空在本地取值，为空从服务器取值
        if (needValue == 'A') {
            return new Promise(resolve => {
                resolve(valueA)
            })
        } else {
            return new Promise(resolve => {
                let netValue = "这个值来自服务器"
                resolve(netValue)
            })
        }
    }

    promise() {
        let content = "";//记录处理的经历
        let promise = new Promise((resolve, reject) => {
            content += "处理和执行";
            this.println("处理和执行")
            resolve(content)
        })

        promise
            .then(() => {
                this.println("后续步骤1")
            })
            .then(() => {
                this.println("后续步骤2")
            })
            .then((a) => {
                this.println("后续步骤3" + a)
            })
            .then(() => {
                this.println("后续步骤5" + e.x.x.x.x)
            })
            .catch(() => {
                this.println("异常A")
                return "errorA"
            })
            .then((a) => {
                this.println("后续步骤4" + a)
            })
            .then(() => {
                this.println("后续步骤5" + e.x.x.x.x)
            })
            .catch(() => {
                this.println("异常B")
            })
    }

    promiseErr() {

        let promise = new Promise((resolve, reject) => {
            this.println("处理一件耗时的事情。。。")
            resolve("")
        })

        promise
            .then(() => {
                this.println("后续步骤1" + e.x.x.x.x)
            })
            .then(() => {
                this.println("后续步骤2")
            })
            .then(() => {
                this.println("后续步骤3")
            })
            .catch((error) => {
                //打印异常
                this.println("异常1" + error)
                //抛出，后续可以继续处理异常
                throw error;
            })
            .catch((error) => {
                this.println("异常2" + error)
                //抛出，后续可以继续处理异常
                return Promise.reject(123);
            })
            .catch((error) => {
                this.println("异常3" + error)
            })
            .then(() => {
                this.println("后续步骤4")
            })
            .then(() => '333')
            .then((data) => {
                this.println("后续步骤5" + data)
            })
    }

    promiseErrNoCatch() {
        let promise = new Promise(() => {
            this.println("PromiseA")
        })

        Promise.all(promise)
            .then(() => {
                this.println("后续步骤1" + e.x.x.x.x)
            })
    }

    promiseQueue() {
        let promise1 = new Promise(() => {
            this.println("PromiseA")
        })
        let promise2 = new Promise(() => {
            this.println("PromiseA")
        })
        //
        // Promise.race()all([promise1, promise2])
        //     .then(() => {
        //         this.println("后续步骤1" + e.x.x.x.x)
        //     })
    }
}