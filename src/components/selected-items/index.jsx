import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Actions
import {
    removeFromList,
    toggleSelected
} from '../../actions';

class SelectedItems extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(index) {
        console.log(index)
        this.props.toggleSelected(index)
    }

    handleClick(index) {
        this.props.removeFromList(index)
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
                    <td className="col-3 col-sm-2 d-flex justify-content-around">
                        {item.selected ?
                            <button type="button" className="btn btn-outline-success btn-sm font-weight-bold" onClick={() => this.handleToggle(index)}>-</button>
                            :
                            <button type="button" className="btn btn-outline-success btn-sm font-weight-bold" onClick={() => this.handleToggle(index)}>+</button>
                        }
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.handleClick(index)}>Delete</button>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeFromList,
        toggleSelected
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItems)