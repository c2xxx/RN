let MyTool = {};

MyTool.name = "工具类"

MyTool.getTime = () => {
    let time=new Date();
    let timeStr=`${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    return timeStr;
};

MyTool.add = (a, b) => {
    return a + b;
};

MyTool.sub = (a, b) => {
    return a - b;
};

export default MyTool;