import React from 'react';
import {Grid} from 'semantic-ui-react';
import ServiceItem from '../service-item/ServiceItem.component';
import "./Services.styles.scss";

const servicesData = [
    {id: '1', imageUrl: require('./../../assets/premium-calculator.png'), title: 'Premium Calculator', color: "#f1f3ff", textColor: "#206175"},
    {id: '2', imageUrl: require('./../../assets/policy_information.png'), title: 'Policy Information', color: "#f9e9ff", textColor: "#b8409e"},
    {id: '3', imageUrl: require('./../../assets/transaction.png'), title: 'My Transaction', color: "#ffeeee", textColor: "#990012"},
]

const displayServices = (services) => {
    return services.map(service => {
        const {id, title, imageUrl, color, textColor} = service;
        return <ServiceItem key={id} title={title} imageUrl={imageUrl} color={color} textColor={textColor}/>
    })
    
}

const Services = () => {
    return (
        <Grid centered verticalAlign="middle" textAlign="center" stackable>
            <Grid.Row>
                {displayServices(servicesData)}    
            </Grid.Row>
        </Grid>
            
    );
}

export default Services;