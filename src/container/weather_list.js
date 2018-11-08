import React, {Component} from 'react';
import {connect} from 'react-redux';
//npm install react-sparklines --save
//      parent       child
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const temperatures = _.map(cityData.list.map(weather => weather.main.temp), (temp) =>temp - 273 );
        //const temperatures = cityData.list.map(weather => weather.main.temp - 273); works as well
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        console.log(temperatures);
        return (
            // add key to the top level element of a list
            // height and width in pixel values
            <tr key = {cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                   <Chart data = {temperatures} color = "red" units = " C"/>
                </td>
                <td>
                    <Chart data = {pressure} color = "green" units = " hPa"/>
                </td>
                <td>
                    <Chart data = {humidity} color = "blue" units = " %"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather) /*mapping the array of cities with weather data*/}
                </tbody>
            </table>
        );
    }
}

//                      ({weather}) also works since we only use one key
function mapStateToProps(state) {
    // call state.weather because we assigned weather reducer to the key weather in reducer_weather.js
    return {weather: state.weather}; //if we only need one key, we can use return {weather};
}

export default connect(mapStateToProps)(WeatherList);