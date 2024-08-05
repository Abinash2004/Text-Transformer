import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success");
    }
    const handleRevClick = () => {
        let newText="";
        for(let i=0; i<text.length; i++) {
            newText+=text[text.length-i-1];
        }
        setText(newText);
        props.showAlert("Coverted to Reverse String","success");
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleard the Text","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter Your Text");
    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h3 className='my-3' style={{color: (props.mode === 'dark') ? 'white' : 'black'}} value={text} >{props.heading}</h3>
                <textarea className="form-control" id="myBox" style={{color: (props.mode === 'dark') ? 'white' : 'black', backgroundColor: (props.mode === 'light') ? 'white' : 'black'}} value={text} onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy To Clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRevClick}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: (props.mode === 'dark') ? 'white' : 'black'}}>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        </div>
        </>
    )
}
