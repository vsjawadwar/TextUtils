import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  let myStyleDark={color:'black',
                backgroundColor:'white',
                border: '2px solid black'              
};
let myStyle={color:'white',
                backgroundColor:'#373030',
                border: '2px solid white'              
};
  const [text, setText] = useState("");
  const upperCase = () => {
    console.log("Upper Case is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };
  const lowerCase = () => {
    console.log("Lower Case is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  };
  const copyText = () => {
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); // For deselecting text post copy operation.
    props.showAlert("Text Copied Successfully","success");
  };
  const clearText=()=>{
    let newText ="";
    setText(newText);
    props.showAlert("Text Cleared Successfully","success");
  };
  const extraSpaceRemove=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed Successfully","success");
  };
  const onChangeHandle = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3" style={props.mode==='dark'? myStyle : myStyleDark}>
        <h3 className='my-2 text-center'>{props.heading}</h3>
        <textarea className="form-control" style={props.mode==='dark'? myStyle : myStyleDark} id="exampleFormControlTextarea1" onChange={onChangeHandle} rows="10" value={text}></textarea>
        <button type="button" disabled={text.length===0}style={props.mode==='dark'? myStyle : myStyleDark} className="btn btn-primary mx-2 my-3" onClick={upperCase}>Upper Case</button>
        <button type="button" disabled={text.length===0}style={props.mode==='dark'? myStyle : myStyleDark} className="btn btn-primary mx-2 my-3" onClick={lowerCase}>Lower Case</button>
        <button type="button" disabled={text.length===0}style={props.mode==='dark'? myStyle : myStyleDark} className="btn btn-primary mx-2 my-3" onClick={copyText}>Copy Text</button>
        <button type="button" disabled={text.length===0}style={props.mode==='dark'? myStyle : myStyleDark} className="btn btn-primary mx-2 my-3" onClick={extraSpaceRemove}>Remove Extra Spaces</button>
        <button type="button" disabled={text.length===0}style={props.mode==='dark'? myStyle : myStyleDark} className="btn btn-primary mx-2 my-3" onClick={clearText}>Clear Text</button>

      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0;}).length} Words {text.length} Characters</p>
      </div>
    </>
  )
}
TextForm.ProtoTypes = { mode:PropTypes.string, heading: PropTypes.string };
TextForm.defaultProps = { mode: "light",heading: "Default Props" };
