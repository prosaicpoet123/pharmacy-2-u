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
        this.props.toggleSelected(index)
    }

    handleClick(index) {
        this.props.removeFromList(index)
    }

    renderSelectedItems() {
        return this.props.basket.map(({name, description, dosageDetails, lastDispensed, selected}, index) => {
            return (
                <tr
                    className={`row align-items-center ${selected && 'selected'}`}
                    key={name + index}
                >
                    <td className="col-5 col-sm-4 col-md-5">
                        <span className="text-uppercase font-weight-bold d-block">{name}</span>
                        <span className="text-lowercase font-italic">{description}</span>
                    </td>
                    <td className="col-4 col-sm-3 col-md-3 font-italic">{dosageDetails}</td>
                    <td className="col-3 col-sm-2 col-md-2">{lastDispensed}</td>
                    <td className="col-8 d-block d-sm-none"/>
                    <td className="col-4 col-sm-3 col-md-2 d-flex justify-content-start">
                        {selected ?
                            <button type="button" className="btn btn-outline-success btn-round btn-sm font-weight-bold" onClick={() => this.handleToggle(index)}>-</button>
                            :
                            <button type="button" className="btn btn-success btn-round btn-sm font-weight-bold" onClick={() => this.handleToggle(index)}>+</button>
                        }
                        <button type="button" className="btn btn-secondary btn-sm ml-2" onClick={() => this.handleClick(index)}>Delete</button>
                    </td>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeFromList,
        toggleSelected
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItems)