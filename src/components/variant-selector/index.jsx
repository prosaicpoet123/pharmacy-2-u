import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { 
    resetSearch, 
    resetSearchTerm, 
    addToList 
} from '../../actions';

class VariantSelector extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        let selected = _.filter(this.props.search.searchResult.result.variants, item => item.id.includes(e.target.value.toLowerCase()));
        this.props.addToList(selected[0])
        this.props.resetSearch()
        this.props.resetSearchTerm()
    }

    renderDropdown() {
        if (this.props.search.searchResult.result) {
            return (
                <select className="custom-select" defaultValue="" onChange={this.handleChange.bind(this)}>
                    <option value="">Select</option>
                    {this.props.search.searchResult.result.variants.map((variant, index) => {
                        return (
                            <option value={variant.id} key={variant.id + index}>{variant.description}</option>
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

    render () {
        return (
            <td className="col-12 col-sm-9 col-md-9">
                {this.renderDropdown()}
            </td> 
        )
    }
}

function mapStateToProps(state) {
    return {
        search: state.shop.search
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        resetSearch, 
        resetSearchTerm, 
        addToList 
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VariantSelector)