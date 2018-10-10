import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import MiniBasket from '../mini-basket'

const basketData = {
    price: '£0.00',
    quantity: 1,
}

class HeaderBasket extends Component {

    render() {
        return (
            <div>
                <a
                    className="btn btn-light w-100 d-flex justify-content-between align-items-center"
                    // onClick={} manage the on click event for showing/hiding the mini basket here
                >
                    <span className="d-none d-sm-block">{basketData.price}</span>
                    <span className="btn btn-primary btn-sm d-none d-sm-block">{basketData.quantity}</span>
                </a>
                <MiniBasket />
            </div>
        )
    }
}

export default HeaderBasket