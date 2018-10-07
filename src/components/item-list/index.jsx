import React, { Component } from 'react';
import { connect } from 'react-redux';

class MedicationList extends Component {

    render() {
        return (
            <div>
                <h1>Your Medication</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Dosage Details</th>
                            <th scope="col">Last Dispensed</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <form>
                                    <div class="form-group">
                                        <input className="form-control"></input>
                                        <select className="custom-select custom-select-lg mb-3">
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