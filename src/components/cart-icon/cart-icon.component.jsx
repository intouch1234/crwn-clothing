import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden})=>(
<div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">0</span>
</div>
);

const mapDispathToProps = dispath => ({
    toggleCartHidden: () => dispath(toggleCartHidden())
});

export default connect(null,mapDispathToProps)(CartIcon);