import React from 'react';
import { Grid } from 'semantic-ui-react';

import InsuranceItem from '../insurance-item/InsuranceItem.component';
import './Insurance.styles.scss';

const insurancedata = [
    {id: '1', title: 'Small Business Insurance', description: 'Protect your business from the risk of fire, theft, accidenal damage and third party liberty, you can tailor a quote that suits your specific business need'},

    {id: '2', title: 'Workers Compensation', description: 'Protect your business from the risk of fire, theft, accidenal damage and third party liberty, you can tailor a quote that suits your specific business need'},

    {id: '3', title: 'Commercial & Corporate', description: 'Protect your business from the risk of fire, theft, accidenal damage and third party liberty, you can tailor a quote that suits your specific business need'}
];

const displayInsuranceItem = (insuranceItems) => {
    return insuranceItems.map(insurance => {
        return <InsuranceItem key={insurance.id} insurance={insurance} />
    })
}


const Insurance = () => {
    return(
        <div className="insurance">
            
            <Grid textAlign="center" verticalAlign="middle" columns={4}>
            <Grid.Row>
                <h1>Looking for Business Insurance?</h1>
            </Grid.Row>
            <Grid.Row>
                {displayInsuranceItem(insurancedata)}

            </Grid.Row>
            </Grid>
        </div>
    );
}

export default Insurance;