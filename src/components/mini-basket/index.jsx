import React, { Component } from 'react';
import { connect } from 'react-redux';

// Selectors
import { subtotalSelector } from '../../selectors/selectors'

class MiniBasket extends Component {

    renderMiniBasketItem({ name, description, selected, price }, index) {
        if (selected) {
            return (
                <div key={index}
                    className="d-flex align-items-start justify-content-between p-3 border-top">
                    <div className="bf-item">
                        <span className="text-uppercase font-weight-bold name">{name} </span>
                        <span className="description">{description}</span>
                        <span className="d-block subtotal">£{price}</span>
                    </div>
                    <div className="quantity">
                        Qty: 1
                    </div>
                </div>
            )
        }

        return null
    }

    renderMiniBasket() {
        console.log(this.props.subtotal)
        if (this.props.miniBasket.active) {
            return (
                <div className="basket-flyout p-2">
                    <div className="bf-note d-flex align-items-center p-3">
                        <span className="icon"></span>
                        <span className="pl-2">Free Delivery on NHS repeat prescription items</span>
                    </div>
                    <div className="bf-items">
                        {this.props.basket.map((item, index) => {
                            return (
                                this.renderMiniBasketItem(item, index)
                            )
                        })
                        }
                    </div>
                    <div className="text-right p-3 border-top font-weight-bold bf-subtotal">
                        Subtotal
                        <span className="ml-3 subtotal">£{this.props.subtotal === 0 ? '0.00' : this.props.subtotal}</span>
                    </div>
                    <span className="bf-arrow"></span>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderMiniBasket()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        miniBasket: state.shop.miniBasket,
        basket: state.shop.basket,
        subtotal: subtotalSelector(state)
    }
}

export default connect(mapStateToProps, null)(MiniBasket)