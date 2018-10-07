import React, { Component } from 'react';
import { connect } from 'react-redux';
import lodash from 'lodash'

class MedicationList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            searchTerm: '',
            currentDisplayed: this.props.items,
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);

    }

    onFocus() {
        this.setState({focused: true})
    }

    onBlur() {
        this.setState({focused: false})
    }

    onInputChange(e) {
        let newlyDisplayed = _.filter(this.props.items, item => item.name.includes(e.target.value.toLowerCase()));

        this.setState({
            searchTerm: e.target.value,
            currentDisplayed: newlyDisplayed
        });

    }

    renderSearchTerms() {
        return this.state.currentDisplayed.map((item) => {
            return (
                <li>{item.name}</li>
            )
        }
        )
    }

    render() {
        return (
            <div>
                <h1>Your Medication</h1>
                <h2>Medication list</h2>
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
                                            <div class="dropdown-content">
                                                <input 
                                                    type="text" 
                                                    placeholder="Type drug name here" 
                                                    className="form-control" 
                                                    onChange={this.onInputChange.bind(this)} 
                                                    onFocus={this.onFocus} 
                                                    onBlur={this.onBlur}
                                                />
                                                <div className="search-list">
                                                    {this.renderSearchTerms()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-9">
                                        <select className="custom-select" defaultValue="" disabled>
                                            <option value="" disabled>Select</option>
                                            {this.props.items.map((item, index) => {
                                                return (
                                                    <option value={item.id} key={item.id + index}>{item.name}</option>
                                                );
                                            })}
                                        </select>
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

function mapStateToProps(state) {
    return {
        items: state.shop.items
    }
}

export default connect(mapStateToProps)(MedicationList);