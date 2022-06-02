import React from "react";

const Form = (props) => {
    return(
      <div className="form_com">
        <form onSubmit={props.getWeather}>
          <input type="text" name="country" placeholder="Country ..." />
          <input type="text" name="city" placeholder="City ..." />
          <button> Get Weather </button>
        </form>
      </div>
      
    )
}



export default Form;