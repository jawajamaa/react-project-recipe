import "./Toggle.css"

function Toggle({ handleChange, isChecked }) {



    return(
        <div className = "toggle-container">
            <input
            type= "checkbox"
            id = "check"
            className = "toggle"
            onChange = { handleChange }
            isChecked = { isChecked }
            />
            <label htmlFor = "check">Dark Mode</label>
        </div>
    )
}

export default Toggle;
