import React from 'react';
import { Icon, Segment, Header, Button } from 'semantic-ui-react';

import "./SupportService.styles.scss";

const SupportService = () => {
    return (
        <Segment className="support-service">
            
            <Header as="h2">What would you like to do today</Header>
            
            <div className="service-box-container">
                <div className="service-box">
                    <Icon name="clipboard list" inverted size="huge"/>
                    
                    <span>Update my particulars &gt;</span>
                </div>
                <div className="service-box">
                    <Icon name="credit card" inverted size="huge" />
                    <span>Pay my premium &gt;</span>
                </div>
                
                <div className="service-box">
                    <Icon name="user" inverted size="huge" />
                    <span>Make a double claim &gt;</span>
                </div>
            </div>
            <Button style={{backgroundColor: "transparent", border: "1px solid #fff"}}>VIEW ONLINE SERVICES</Button>    
            
        </Segment>
    );
}

export default SupportService;