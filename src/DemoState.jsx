import { useState } from "react"

const DemoState = () => {

    const [num, setNum] = useState(1);
    const [fullName, setFullName] = useState('Nguyễn Văn A');
    const increment = () => {
        // let result = num + 1;
        setNum(num + 1)
    }
    const hello = () => {
        alert("Xin chào")
    }
    const changeFullName = () => {
        let fullNameNew = prompt("Nhập vào tên");
        setFullName(fullNameNew);
    }
    return (<>
        <h1>{fullName}</h1>
        <button>-</button><span>{num}</span><button onClick={increment}>+</button>
        <button onClick={hello}>Click me</button>
        <br />
        <button onClick={changeFullName}>Change Name</button>
    </>)
}
export default DemoState;