import"./Button.css"
function Button (){

    return(
<>
<p className="button" onClick={handleClick}>Upload</p>
</>

    )
}

function handleClick(){

    console.log('Button Clicked')
}

export default Button