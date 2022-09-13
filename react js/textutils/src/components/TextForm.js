import React , {useState} from 'react'

export default function TextForm(props) {

    const words = (text)=>{
        let words = text.split(" ").length
        if (text === '') {
            return 0
        }
        else {
            return words
        }
    }
    
    // function to convert upperCase
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", props.mode === 'dark'?'success':'primary')
    }

    // function to convert lowerCase
    const handleLwClick = ()=>{
        // console.log("UpperCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", props.mode === 'dark'?'success':'primary')
    }
    
    // function to clear 
    const handleClrClick = ()=>{
        // console.log("UpperCase was clicked")
        if (window.confirm("Do you really want to clear textArea?")){
            setText("")
        }
        props.showAlert("TextArea Cleared", props.mode === 'dark'?'success':'primary')
    }
    
    // function to handle extra spaces
    const handleExtraSpaces = ()=> {
        props.showAlert("extraSpaces Cleared", props.mode === 'dark'?'success':'primary')
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    
    const handleCopy = ()=> {
        var text = document.getElementById("myBox") 
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Context is copied!!", props.mode === 'dark'?'success':'primary')
    }
    
    const handleOnChange  = (event)=>{
        // console.log("on change") 
        // to change/ype the value in textBox  
        setText(event.target.value)
    } 

    const [text, setText] = useState("")
    // text is the varaible which wil be updated
    // setText will be the function whcih will change the text 
    return (
        <>
        <div className='container' style={{color : props.mode === 'dark'?'white':'#00366c'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange = {handleOnChange} placeholder = "Enter the text" style={{backgroundColor : props.mode==='dark'?'black':'white', color : props.mode === 'dark'?'yellow':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLwClick}>Convert to lowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove ExtraSpace </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text </button>
            <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear TextArea</button>
        </div>
        <div className="container my-3"  style={{color : props.mode === 'dark'?'white':'#00366c'}}>
            <h3>Summary: </h3>
            <p>words : {words(text)} and characters : {text.length}</p>
            <p>Reading time : {0.08 * words(text)}</p>
        </div>
        </>
    )
}
