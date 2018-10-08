import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedItems extends Component {

    renderSelectedItems() {
        return this.props.basket.map((item, index) => {
            return (
                <tr className="d-flex align-items-center">
                    <td scope="col" className="col-3 col-md-6">{item.name}</td>
                    <td scope="col" className="col-3 col-md-2">{item.name}</td>
                    <td scope="col" className="col-3 col-md-2">{item.name}</td>
                    <td scope="col" className="col-3 col-md-2">{item.name}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            this.renderSelectedItems()
        )
    }

}

function mapStateToProps(state) {
    return {
        basket: state.shop.basket
    }
}

export default connect(mapStateToProps, null)(SelectedItems)