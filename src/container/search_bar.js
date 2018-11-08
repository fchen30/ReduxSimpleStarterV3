import React, {Component} from 'react';
//this is a container
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        // the first this after = (instance search bar) has a function onInputChange, bind the function with (this), the search bar.
        // Replace this.onInputChange(the search bar's onInputChange function) with this new banded function (replace the defined function with banded function)
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange (event){
        console.log(event.target.value);
        this.setState ({term :event.target.value});
    }

    onFormSubmit(event) {
        // prevent default setting with submit the form itself
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState ({term: ''});
    }

    render() {
        return (
            // form can handle enter and search button using the same event handler
            <form onSubmit={this.onFormSubmit} className = "input-group">
                <input placeholder ="Get a five day forecast in your favorite cities"
                className="form-control"
                value = {this.state.term}
                       //whenever place a callback as a function use this.function, bind the function with this first
                onChange = {this.onInputChange}
                />
                <span className = "input-group-btn">
                    <button type="submit" className = "btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    //fectchWeather returns an action and cause bindActionCreator bind action with dispatch. Action flows down to the middle ware and redux.
    return bindActionCreators({fetchWeather}, dispatch);
}


// there is no state for this container, only the dispatch function
export default connect(null, mapDispatchToProps)(SearchBar);