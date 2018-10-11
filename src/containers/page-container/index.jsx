import React from 'react';

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