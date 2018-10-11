import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { dispatchUpdateMiniBasketStatus } from '../../actions'

// Components
import MiniBasket from '../mini-basket'

// Selectors 
import { subtotalSelector } from '../../selectors/selectors'

class HeaderBasket extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.dispatchUpdateMiniBasketStatus(status)
        }
    }

    handleClick() {
        let status = true
        if (this.props.miniBasket.active) {
            status = false
        }
        this.props.dispatchUpdateMiniBasketStatus(status)
    }

    renderQuantity() {
        if (this.props.basket.length) {
            const items = this.props.basket.filter(item => {
                return item.selected === true
            })

            return items.length
        }

        return 0
    }

    render() {
        return (
            <div ref={this.setWrapperRef} className="d-flex justify-content-end">
                <a
                    className="basket-button d-flex d-md-none justify-content-center align-items-center"
                    onClick={this.handleClick}
                >
                    <span className="icon-basket" />
                    <span className="roundel">{this.renderQuantity()}</span>
                </a>
                <a
                    className={`${this.props.miniBasket.active && 'btn-light'} basket-button btn w-100 d-none d-md-flex justify-content-between align-items-center`}
                    onClick={this.handleClick}
                >
                    <span className="icon-basket"></span>
                    <span className="basket-subtotal">£{this.props.subtotal === 0 ? '0.00' : this.props.subtotal}</span>
                    <span className={`${this.props.miniBasket.active ? 'btn-primary' : 'btn-light'} btn btn-sm basket-quantity`} >{this.renderQuantity()}</span>
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
        miniBasket: state.shop.miniBasket,
        basket: state.shop.basket,
        subtotal: subtotalSelector(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBasket)