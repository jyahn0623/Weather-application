import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading.js";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather"

const API_KEY = "5b6e399ecd57fd847b24a64a67c037de";
// weather api address = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
// http://api.openweathermap.org/data/2.5/weather?lat=37.2611846&lon=127.0414268&APPID=5b6e399ecd57fd847b24a64a67c037de

/*
export default function App() {
  return (
    <Loading />
  );
}
*/

export default class extends React.Component{
  state = {
    isLoading : true,
  }

  getWeather = async (lat, lon) =>{
     const {
            data : {
              main : {temp},
              weather
            }
           } = await axios.get(
       `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric` // ` 백틱, 변수를 문자열에 포함시키는 es6의 무기
     );
     this.setState({
        isLoading : false,
        temp : temp,
        condition : weather[0].main,
     })
     console.log(data);
  }
  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync(); // 권한을 받아야 한다.
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading : false, })
      
      
      console.log(latitude, longitude);
    }catch(error){
      Alert.alert("Alarm", "Error occur!" + error);
    }
    
  }

  componentDidMount(){
    this.getLocation();
    console.log
  }
  render() {
    const { isLoading } = this.state;
    console.log(isLoading);
    return isLoading ? <Loading /> : <Weather temp={Math.round(this.state.temp)} condition={this.state.condition}/>;
  } 
}