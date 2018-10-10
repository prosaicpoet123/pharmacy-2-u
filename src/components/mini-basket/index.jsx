import React, { Component } from 'react';
import { connect } from 'react-redux';

class MiniBasket extends Component {

    renderMiniBasket() {
        if (this.props.miniBasket.active) {
            return (
                <div className="basket-flyout">
                    <div className="bf-note">
                        <span class="icon"></span>
                        Free Delivery on NHS repeat prescription items
                    </div>
                    <div>
                        <ul>
                            {this.props.basket.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item.name}
                                        {item.description}
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <div></div>
                    <span class="bf-arrow"></span>
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
        basket: state.shop.basket
    }
}

export default connect(mapStateToProps, null)(MiniBasket)