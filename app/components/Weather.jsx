//If you are getting this error, try setting the value to either "inline-source-map" or "eval-source-map" instead.
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading:true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading:false
      });
    }, function (errorMessage) {
        alert(errorMessage);
        that.setState({isLoading:false});

    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage (){
      if (isLoading){
        return <h3>Fetching Weather...</h3>;
      }else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }else{
        return <h3>Please enter a valid city name</h3>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
