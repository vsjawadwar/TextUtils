import React from 'react'
export default function About(props) {
    let myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : '#373030',
        border: '1px solid',
        bordercolor: props.mode === 'light' ? 'white' : 'black'
    };
    return (
        <>
            <div className="container my-3">
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne" style={myStyle}>
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze Your Text</ strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,character count and much more. So you can come here with your text and manipulate as you want.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo" style={myStyle} >
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant characters count & word count statstistics for a given text. TextUtils reports a number of words and character. Thus it is suitable for writing text with words/character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree" style={myStyle}>
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This TextUtils web application works on any browser such as Google Chrome, Mozzila Firefox , Internet Explorer , Safari , Opera etc. It suits to count character on facebook post,blogs,books and excel documents,pdf documents and essays.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
