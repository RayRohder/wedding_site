// A component is a function that retuns JSX
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Api_Key = "cbf10e070483c8fdfa20b257706b8ce6";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      temp:0,
      sky:"xx"
    };
  }

  getWeather = async () => {
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=gilze,nl&appid=${Api_Key}`);
  const response = await api_call.json();

  if(response){
    console.log(response.list);
    var list = response.list.filter(item => (item.dt_txt === "2019-05-31 12:00:00"));
    if(list.length > 0){
      console.log(list[0]);
      var temp = Math.round(list[0].main.temp - 273.15);
      var icon = list[0].weather[0].icon;

      this.setState({
        temp:temp,
        sky:`http://openweathermap.org/img/w/${icon}.png`
      });
    }
  }
}

  componentDidMount(){
    this.getWeather();
  }

  render() {
    if(this.state.temp > 0){
      return (
        <div class="weather">
          <h2>Het weer die dag:</h2>
          {this.state.temp} &#176; C
          <img src={this.state.sky}/>
        </div>
      )
    }else{
      return (
        <div class="weather">
          <h2>Het weer die dag is nog onbekend.</h2>
        </div>
      )
    }
  };

}
export default Weather;
