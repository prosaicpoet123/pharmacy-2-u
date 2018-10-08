import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import lodash from 'lodash'

//Actions
import { dispatchSearch } from '../../actions/index';

class MedicationList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            searchTerm: '',
            currentDisplayed: this.props.items,
            result: undefined
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);

    }

    onFocus() {
        this.setState({ focused: true })
    }

    onBlur() {
        this.setState({ focused: false })
    }

    onInputChange(e) {
        let newlyDisplayed = _.filter(this.props.items, item => item.name.includes(e.target.value.toLowerCase()));
        this.setState({
            searchTerm: e.target.value,
            currentDisplayed: newlyDisplayed,
        }, () => {
            let result = _.find(this.props.items, { "name": this.state.searchTerm.toLowerCase()})
            this.setState(
                {result}, () => {
                    console.log(this.state.currentDisplayed)
                    this.renderDropdown()
                }
            )
        });

        this.props.dispatchSearch(e.target.value)

    }

    handleMouseDown(e) {
        this.setState({
            searchTerm: e.target.id
        })
    }

    renderSearchTerms() {
        if (this.state.focused && this.state.searchTerm.length) {
            return this.state.currentDisplayed.map((item, index) => {
                return (
                    <li className="list-group-item text-uppercase" id={item.name} key={item.name + index} onMouseDown={this.handleMouseDown}>{item.name}</li>
                )
            }
            )
        }
    }

    renderDropdown() {
        if (this.state.result) {
            return (
                <select className="custom-select" defaultValue="">
                    <option value="">Select</option>
                    {this.state.result.variants.map((variant, index) => {
                        return (
                            <option value={variant.id} key={variant.id + index}>{variant.name}</option>
                        );
                    })}
                </select>
            )
        }

        return (
            <select className="custom-select" defaultValue="" disabled>
                <option value="">Select</option>
            </select>
        )

    }


    render() {
        return (
            <div>
                <h1 className="mb-4">Your Medication</h1>
                <h2 className="mb-3">Medication list</h2>
                <table className="table">
                    <thead>
                        <tr className="d-flex align-items-center">
                            <th scope="col" className="col-3 col-md-6">Item</th>
                            <th scope="col" className="col-3 col-md-2">Dosage Details</th>
                            <th scope="col" className="col-3 col-md-2">Last Dispensed</th>
                            <th scope="col" className="col-3 col-md-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4">
                                <form className="form-inline d-flex">
                                    <div className="form-group col-12 col-sm-12 col-md-3">
                                        <div className="field-with-dropdown">
                                            <div className="dropdown-content">
                                                <div className="search-list">
                                                    <input
                                                        type="text"
                                                        placeholder="Type drug name here"
                                                        className="form-control"
                                                        onChange={this.onInputChange.bind(this)}
                                                        onFocus={this.onFocus}
                                                        onBlur={this.onBlur}
                                                        value={this.state.searchTerm}
                                                    />
                                                    <ul className="list-group">
                                                        {this.renderSearchTerms()}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-9">
                                        {this.renderDropdown()}
                                    </div>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ dispatchSearch }, dispatch);
}

function mapStateToProps(state) {
    return {
        items: state.shop.items
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicationList);