import React, {Component} from 'react';
import {Link} from 'react-router';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className="main-nav">
                        <li><Link to='/' onlyActiveOnIndex={true}>Крутая картика</Link></li>
                        <li><Link to='/' onlyActiveOnIndex={true}>Главная</Link></li>
                        <li><Link to='catalog'>Каталог</Link></li>
                        <li><Link to='basket'>Корзина</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;