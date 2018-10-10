import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import lodash from 'lodash'

//Actions
import { dispatchSearch } from '../../actions/index';

//Components
import SearchField from '../search-field'
import VariantSelector from '../variant-selector'
import SelectedItems from '../selected-items'

class MedicationList extends Component {

    render() {
        return (
            <div>
                <h1 className="mb-4">Your Medication</h1>
                <h2 className="mb-3">Medication list</h2>
                <div>
                    <table className="table">
                        <thead>
                            <tr className="row align-items-center">
                                <th scope="col" className="col-5 col-sm-4 col-md-5">Items</th>
                                <th scope="col" className="col-4 col-sm-3 col-md-3">Dosage Details</th>
                                <th scope="col" className="col-3 col-sm-2 col-md-2">Last Dispensed</th>
                                <th scope="col" className="col-3 col-sm-3 col-md-2 d-none d-sm-block">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <SelectedItems />
                            <tr className="row align-items-center">
                                <SearchField />
                                <VariantSelector />
                            </tr>
                        </tbody>
                    </table>
                </div>
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
