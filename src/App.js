import React ,{Component} from "react";
import "./App.css";

import Weather from "./component/Weather";
import Form from "./component/Form";


const API_KEY = "806e255ebb4157320b76a3d474bdf53d";
//  http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44


class App extends Component {

  state = {
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }

  // get the weather data from api by using json
  getWeather = async (e) =>{

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const data = await api.json();
    console.log(data);

    if(city && country){
      this.setState({
        tempreature: data.main.temp ,
        city: data.name ,
        country: data.sys.country ,
        humidity: data.main.humidity ,
        description: data.weather[0].description ,
        error:''
      });
    }else{
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:' Please Inter Correct Data '
      })
    }
    
    
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Form getWeather={this.getWeather} />
          <Weather
            tempreature = {this.state.tempreature} 
            city= {this.state.city}
            country= {this.state.country}
            humidity= {this.state.humidity}
            description= {this.state.description}
            error= {this.state.error}
          />
        </div> 
      </div>
    );
  }
}

export default App;
