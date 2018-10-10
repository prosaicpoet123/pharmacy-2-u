import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {dispatchUpdateMiniBasketStatus} from '../../actions'

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
        if(this.props.miniBasket.active) {
            status = false
        }
        this.props.dispatchUpdateMiniBasketStatus(status)
    }

    render() {
        return (
            <div>
                <a
                    className="btn btn-light w-100 d-flex justify-content-between align-items-center"
                    onClick={this.handleClick}
                >
                    <span className="d-none d-sm-block">{basketData.price}</span>
                    <span className="btn btn-primary btn-sm d-none d-sm-block">{basketData.quantity}</span>
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