import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import lodash from 'lodash'

//Actions
import { dispatchSearch } from '../../actions/index';

class SearchField extends Component {

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            searchTerm: '',
            currentDisplayed: this.props.items,
            result: undefined
        };

        this.handleChange = this.handleChange.bind(this);
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

    handleChange(e) {
        let newlyDisplayed = _.filter(this.props.items, item => item.name.includes(e.target.value.toLowerCase()));
        this.setState({
            searchTerm: e.target.value,
            currentDisplayed: newlyDisplayed,
        }, () => {
            let result = _.find(this.props.items, { "name": this.state.searchTerm.toLowerCase()});
            this.props.dispatchSearch(
                {result}, () => {
                    this.renderDropdown();
                }
            )
        });

    }

    handleMouseDown(e) {
        this.setState({
            searchTerm: e.target.id
        });
        this.handleSearch(e)
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
        <div className="field-with-dropdown">
            <div className="dropdown-content">
                <div className="search-list">
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Type drug name here"
                        className="form-control"
                        onChange={(e) => { this.handleChange(e) }}
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
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);