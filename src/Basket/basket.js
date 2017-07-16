import React, {Component} from 'react';
import {connect} from 'react-redux';

class Basket extends Component {
    render() {
        return (
            <h2>Basket</h2>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
};

export default connect(mapStateToProps)(Basket);