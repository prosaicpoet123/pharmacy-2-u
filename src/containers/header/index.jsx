import React from 'react';
import HeaderBasket from '../../components/header-basket';

const Header = () => {
        return (
            <header>
                <div className="trust-bar"></div>
                <div className="header">
                    <div className="header-fixed d-flex align-items-center">
                        <div className="d-flex align-items-center pt-2 pb-2 pb-sm-4 pt-sm-4 header-inner">
                            <div className="col-6 col-sm-4">
                                <a className="p2u-logo d-block" href="/">
                                </a>
                            </div>
                            <div className="col-2 col-sm-3"></div>
                            <div className="col-2 col-sm-2"></div>
                            <div className="col-2 col-sm-3 p-0 position-sm-static">
                                <HeaderBasket />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );

}


export default Header;