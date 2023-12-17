import React, {useState} from 'react'


export default function (props) {
    const handleUpClick= () =>{
        // console.log("Uppercase was clicked" + text)    used for debugging
        let newText = text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success");

    }
    const handleLoClick= () =>{
      let newText = text.toLocaleLowerCase();
      setText(newText)
      props.showAlert("Converted to Lower Case", "success");

  }
  const handleClearClick= () =>{
    let newText = (" ");
    setText(newText)
    props.showAlert("Text Cleared", "success");

}
     const handleOnChange= (event) =>{
        // console.log("On change")   used for debugging
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className='container' style= {{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{background : props.mode==='dark'?'#000b18f7':'white',color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Upper Case</button>
        <button type="button" className="btn btn-success mx-1" onClick = {handleLoClick}>Convert to Lower Case</button>
        <button type="button" className="btn btn-danger mx-1" onClick = {handleClearClick}>Clear Text</button>


    </div>
    <div className='container my-3'style={{color : props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
