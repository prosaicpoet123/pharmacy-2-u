import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import lodash from 'lodash'

//Actions
import { dispatchSearch } from '../../actions/index';

//Components

import SearchField from '../search-field/search-field'

class MedicationList extends Component {

    renderDropdown() {
        if (this.props.search.result) {
            return (
                <select className="custom-select" defaultValue="">
                    <option value="">Select</option>
                    {this.props.search.result.variants.map((variant, index) => {
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
                                        <SearchField />
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
        items: state.shop.items,
        search: state.shop.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicationList);
