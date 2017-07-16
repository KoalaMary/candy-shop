import React, {Component} from 'react';
// import {connect} from 'react-redux';
import './main.css';

class Main extends Component {
    render() {
        return (
            <div className="main-page">
                <div className="main-page__block welcome">
                    Добро пожаловать в CandyShop!
                </div>
                <div className="main-page__block promo">
                    Наша продукция всегда самого высокого качества и бла-бла...
                </div>
            </div>
        )
    }
}

export default Main;