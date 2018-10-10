import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { dispatchUpdateMiniBasketStatus } from '../../actions'

// Components
import MiniBasket from '../mini-basket'

const basketData = {
    price: '£0.00',
    quantity: 1,
}

class HeaderBasket extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let status = true
        if (this.props.miniBasket.active) {
            status = false
        }
        this.props.dispatchUpdateMiniBasketStatus(status)
    }

    render() {
        return (
            <div className="d-flex justify-content-end">
                <a
                    className="basket-button d-flex d-md-none justify-content-center align-items-center"
                    onClick={this.handleClick}
                >
                    <span className="icon-basket" />
                </a>
                <a
                    className="basket-button btn btn-light w-100 d-none d-md-flex justify-content-between align-items-center"
                    onClick={this.handleClick}
                >
                    <span>{basketData.price}</span>
                    <span className="btn btn-primary btn-sm basket-quantity">{basketData.quantity}</span>
                </a>
                <MiniBasket />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        dispatchUpdateMiniBasketStatus
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        miniBasket: state.shop.miniBasket
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBasket)