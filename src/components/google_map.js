import React, {Component} from 'react';

class GoogleMap extends Component {
    //called automatically after the component is rendered to the screen
    componentDidMount() {
        // new google.maps.Map is how we call an embedded google map
        // this.refs.map is the html element where the map will be render
        // the second parameter is the action object
        new google.maps.Map(this.refs.map, {
            zoom: 12, // zoom level
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        return <div ref ="map" />; //react reference direct refer to a HTML elements that has been rendered to the page
        // access the ref by this.refs.map
    }
}

export default GoogleMap;

