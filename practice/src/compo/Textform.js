import React,{useState} from 'react'
export default function Textform(props) {
    
    const [text, setText] = useState('Enter Text here');
    const clickHandler=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const clickHandl=()=>{
        let newText1 = text.toLowerCase();
        setText(newText1);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
  return (
    <>
    <div>
        <h2>{props.heading}</h2>
       <div className="mb-3">
       <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
       </div>
       <button className="btn btn-primary" onClick={clickHandler}>Convert to Uppercase </button>
       <button className="btn btn-primary mx-3" onClick={clickHandl}>Convert to LowerCase </button>
    </div>
    <div className="container my-4">
        <h2>Text Summary</h2>
        <p><b>{text.split(" ").length-1}</b> Words and <b>{text.length}</b> charecter</p>
    </div>
    </>
  )
}
