import React from 'react';
import { Grid } from 'semantic-ui-react';
import SupportInsurance from '../support-insurance/SupportInsurance.component';
import SupportService from '../support-service/SupportService.component';
import './Support.styles.scss';

const Support = () => {
    return (
        <div className="support">
            <Grid textAlign="center" verticalAlign="center">
                <Grid.Column tablet={12} computer={4}>
                    <SupportInsurance />
                </Grid.Column>

                <Grid.Column tablet={12} computer={8}>
                    <SupportService />
                </Grid.Column>
                
            </Grid>
        </div>
    );
}

export default Support;