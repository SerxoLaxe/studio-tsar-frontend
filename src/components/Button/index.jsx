import './style.css'

function Button({text, callback}){
    return(
        <button className="button" callback={callback} >{text}</button>
    )
}

export default Button