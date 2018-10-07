import React, {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render () {
        return (
            <header>
                <div className="header">
                    <div className="header-inner">
                    </div>
                </div>
            </header>
        );
    }
        
}

function mapStateToProps(state) {
    return {
        items: state.shop.basket
    }
}

export default connect(mapStateToProps)(Header);