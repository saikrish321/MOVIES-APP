import "./mainpage.css"

const InputElement = (props) => {
    return (
        <>
            <input className="inputele" onChange={props.updateInputName} placeholder=" Seach for movies" />
        </>

    )
}

export default InputElement;