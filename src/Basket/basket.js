import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteFromBasket, addCount, subtractCount, cleanBasket} from './actions';

class Basket extends Component {

    deleteProductFromBasket = (product) => {
        this.props.dispatch(deleteFromBasket(product))
    };

    addProductCount = (product) => {
        this.props.dispatch(addCount(product))
    };

    subtractProductCount = (product) => {
        this.props.dispatch(subtractCount(product))
    };

    deleteAll = () => {
        this.props.dispatch(cleanBasket())
    };

    render() {
        const {basket} = this.props;
        return (
            <div className="basket">
                <button onClick={() => this.deleteAll()}>Очистить корзину</button>
                {basket.map((product) =>
                    <section className="product" key={product.id}>
                        <h4 className="product__name">{product.name}</h4>
                        <img className="product__image"
                             src={product.image}
                             alt={product.name}/>
                        <span className="product__price">{product.price} &#8381;</span>
                        <span className="product__price">{product.totalPrice} &#8381;</span>
                        <button onClick={() => this.subtractProductCount(product)}>-</button>
                        <span>{product.count}</span>
                        <button onClick={() => this.addProductCount(product)}>+</button>
                        <button onClick={() => this.deleteProductFromBasket(product)}>Удалить</button>
                    </section>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
};

export default connect(mapStateToProps)(Basket);