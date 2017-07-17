import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToBasket} from '../Basket/actions';
import './catalog.css';

class Catalog extends Component {

    addProductToBasket = (product) => {
        this.props.dispatch(addToBasket(product));
    };

    render() {
        const {products} = this.props;
        return (
            <div className="catalog">
                <div className="catalog__sort">
                    Сортировка
                </div>
                <div className="products-area">
                    {products.map((product) =>
                        <section className="product" key={product.id}>
                            <h4 className="product__name">{product.name}</h4>
                            <img className="product__image"
                                 src={product.image}
                                 alt={product.name}/>
                            <span className="product__price">{product.price} &#8381;</span>
                            <button className="product__btn" onClick={() => this.addProductToBasket(product)}>В корзину</button>
                        </section>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(Catalog);