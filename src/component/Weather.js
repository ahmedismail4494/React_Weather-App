import React  from "react";

const Weather = (props) => {
    return(
      <div className="weather_com">
        { 
          props.country && <p>country : {props.country}</p> 
        }
        { 
          props.city && <p>city : {props.city}</p> 
        }
        { 
          props.tempreature && <p>tempreature :  {props.tempreature} F</p> 
        }
        { 
          props.humidity && <p>humidity : {props.humidity}</p> 
        }
        { 
          props.description && <p>description : {props.description}</p> 
        }
        { 
          props.error && <p>Error : {props.error}</p> 
        }
        
      </div>
    )
}



export default Weather;