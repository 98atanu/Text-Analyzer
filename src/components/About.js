import React, {useState} from "react";

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color : 'white',
                backgroundColor : 'black',
                border : '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
    }

  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
                Welcome to TextAnalyzer

            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            At TextAnalyzer, we believe in the power of words. 
            Our platform is designed to provide you with valuable insights into any text you input. 
            Whether you're a student, professional, or simply curious about the content you encounter, TextAnalyzer is here to assist you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What We Offer:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}> 
            Analyze Text
              Easily analyze any piece of text by entering it below. 
              Our advanced algorithms will provide you with key information such as word count, character count, Time analysis, and UpperCase to LowerCase and vice versa .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Get Started:

            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Ready to explore the world of text analysis? Enter your text below, and let TextAnalyzer guide you through the journey of linguistic discovery.


            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  );
}
