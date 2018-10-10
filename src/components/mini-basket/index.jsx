import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MiniBasket extends Component {

    renderMiniBasket() {
        if(this.props.miniBasket.active) {
            return (
                <div>My name jeff</div>
            )
        }
    }

    render () {
        return (
            <div>
                {this.renderMiniBasket()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        miniBasket: state.shop.miniBasket
    }
}

export default connect(mapStateToProps, null)(MiniBasket)