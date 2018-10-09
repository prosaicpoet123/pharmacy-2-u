import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedItems extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        console.log(e.target.value)
    }

    handleDelete(e) {
        console.log(e.target.value)
    }

    renderSelectedItems() {
        return this.props.basket.map((item, index) => {
            return (
                <tr
                    className={`row align-items-center ${item.selected && 'selected'}`}
                    key={item.name + index}
                >
                    <td className="col-3 col-sm-5">
                        <h6 className="text-uppercase">{item.name}</h6>
                        <span className="text-lowercase font-italic">{item.description}</span>
                    </td>
                    <td className="col-3 col-sm-3 text-capitalize font-italic">{item.dosageDetails}</td>
                    <td className="col-3 col-sm-2 text-capitalize">{item.lastDispensed}</td>
                    <td className="col-3 col-sm-2">
                        {item.selected ?
                            <button value={index} type="button" className="btn btn-outline-success btn-sm" onClick={this.handleSelect}>-</button>
                            :
                            <button value={index} type="button" className="btn btn-outline-success btn-sm" onClick={this.handleSelect}>+</button>
                        }
                        <button value={index} className="btn btn-secondary btn-sm" onClick={this.handleDelete}>Delete</button>
                    </td>
                </tr>
            )
        })
    } 4

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