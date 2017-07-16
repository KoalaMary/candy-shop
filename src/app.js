import React, {Component} from 'react';
// import {connect} from 'react-redux';
import Header from './components/header';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;