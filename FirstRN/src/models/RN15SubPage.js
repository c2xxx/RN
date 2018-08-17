import BasePage from "./RN00BasePage"

let index = 0;
export default class RN15SubPage extends BasePage {

    static navigationOptions = () => ({
        title: "15页面继承"
    })


    doClick() {
        this.println("");
        this.setState({
            name: "张三"
        })
        this.println(this.state.name)
        this.setState({
            name: "李四"
        })
        this.println(this.state.name)
        this.setState({
            name: "王五" + index++,
        })
        this.println(this.state.name)
    }
}