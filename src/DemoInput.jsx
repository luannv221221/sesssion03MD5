import { useState } from "react";

const DemoInput = () => {
    const [text, setText] = useState('');
    const changeText = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    return (
        <>
            <input onChange={(e) => changeText(e)}></input>
            <p>{text}</p>
        </>
    );

}
export default DemoInput;