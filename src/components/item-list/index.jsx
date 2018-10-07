import React, { Component } from 'react';
import { connect } from 'react-redux';

class MedicationList extends Component {

    constructor(props) {
        super(props);
    
        this.state = {term: ''};
    
      }

    handleChange(e) {
        console.log(e.target.value);
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
                                        <input className="form-control" placeholder="Type drug name here" onChange={this.handleChange.bind(this)} />
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