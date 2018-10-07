import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import MedicationList from '../../components/item-list'

const PageContainer = () => {

        return (
            <div className="page">
                <div className="page-inner">
                    <MedicationList />
                </div>
            </div>
        );

}

export default PageContainer;