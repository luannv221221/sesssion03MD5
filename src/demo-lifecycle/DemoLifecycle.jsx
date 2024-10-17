import { Component } from "react";

class DemoLifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("Contructor");
    }

    componentWillMount() {
        console.log("trước khi render");
    }
    componentDidMount() {
        console.log("Gọi sau render thuowifng dùng callAPI, cập nhật state");
    }
    render() {
        console.log("render");
        return (<>
            <>
                <h1>Xin chào</h1>
            </>
        </>)
    }

}
export default DemoLifecycle;