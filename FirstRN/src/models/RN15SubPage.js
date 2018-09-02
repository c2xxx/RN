import BasePage from "./RN00BasePage"

let index = 0;
export default class RN15SubPage extends BasePage {

    static navigationOptions = () => ({
        title: "15页面继承"
    })


    doClick() {
        //state是异步执行的！
        this.println("");
        this.println("index=" + ++index);
        this.setState({
            name: "张三" + index
        })
        //这样只会打印点击之前的值
        this.println("1-" + this.state.name)

        this.setState(prevState => {
            this.println("李四之前是 " + prevState.name)
            return {
                name: "李四" + index
            }
        })
        this.println("2-" + this.state.name)

        this.setState(prevState => {
            this.println("王五之前是 " + prevState.name)
            return {
                name: "王五" + index
            }
        })
        this.setState(prevState => {
            this.println("最新的值是 " + prevState.name)
            return {}
        })
        this.println("3-" + this.state.name)
    }

    doClickB() {
        index++
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
            name: "王五" + index,
        })
        this.println(this.state.name)
    }
}