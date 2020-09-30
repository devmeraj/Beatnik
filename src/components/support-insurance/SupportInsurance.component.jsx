import React from 'react';
import { Segment, Header, Image, Button } from 'semantic-ui-react'

import avatar from '../../assets/avatar.png'

import './SupportInsurance.styles.scss';

const Support = () => {
    return(
        <Segment className="support-insurance">
            <Header as="h2">Need advice?<br /> askSage, our digital advisor.</Header>
            <Image src={avatar} style={{margin: "0 auto 20px"}} size="tiny"/>
            <Button style={{backgroundColor: "transparent", border: "1px solid #fff"}}>FIND A LIFE INSURANCE PLAN</Button>    
            
        </Segment>
    );
}

export default Support;