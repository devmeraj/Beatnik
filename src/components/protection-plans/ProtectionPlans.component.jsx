import React from 'react';
import { Card, Header, Image } from 'semantic-ui-react';

import "./ProtectionPlans.styles.scss"

const ProtectionPlan = ({plan}) => {
    return (
        <div className="protection-plan">
            <Card>
                <Card.Content header={plan.subTitle} className="protection-header" />
                <Image src={plan.imageURL} style={{margin: "10px auto 15px", height: '60px'}} />
                
            </Card>

            <Header as="h4" style={{marginTop: "10px", color: '#fffc01'}}>{plan.title}</Header>
        </div>
    )
}

export default ProtectionPlan;