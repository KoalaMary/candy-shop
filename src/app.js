import React, {Component} from 'react';
// import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>CandyShop</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App;