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
  };
  const lowerCase = () => {
    console.log("Lower Case is clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const copyText = () => {
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const onChangeHandle = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={props.mode==='dark'? myStyle : myStyleDark}>
        <h3>{props.heading}</h3>
        <textarea className="form-control" style={props.mode==='dark'? myStyle : myStyleDark} id="exampleFormControlTextarea1" onChange={onChangeHandle} rows="10" value={text}></textarea>
        <button type="button" style={props.mode==='dark'? myStyle : myStyleDark} className="btn btn-primary my-3" onClick={upperCase}>Upper Case</button>
        <button type="button" style={props.mode==='dark'? myStyle : myStyleDark} className="btn btn-primary mx-2" onClick={lowerCase}>Lower Case</button>
        <button type="button" style={props.mode==='dark'? myStyle : myStyleDark} className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
      </div>
    </>
  )
}
TextForm.ProtoTypes = { mode:PropTypes.string, heading: PropTypes.string };
TextForm.defaultProps = { mode: "light",heading: "Default Props" };
