import React from 'react';
import { Image, Grid, Segment, Header } from 'semantic-ui-react';

import './Awards.styles.scss';

import awardIcon from '../../assets/awardIcon.png';

const awards = [
    {id: '1', title: 'ICT Award 2010 - Best in UI', imageURL: require('../../assets/award.png')},
    {id: '2', title: 'ICT Award 2009 - Best in Web0', imageURL: require('../../assets/award.png')},
    {id: '3', title: 'ICT Award 2010 - Best in App award', imageURL: require('../../assets/award.png')}
];

const displayAwards = () => {
    return awards.map( award => {
        return (

            
            <Grid.Column key={award.id} tablet={12} computer={4} className="awards">
                <Segment>
                    <span className="award-icon">
                        <Image src={awardIcon} size="tiny" />
                    </span>
                    <Image src={award.imageURL} />
            <Header as="h4" style={{color: '#a5d1ff'}}>{award.title}</Header>
                </Segment>
            </Grid.Column>
        );
    }
        
    )
}

const Awards = () => {
    return (
        <div className="awards-container">
        <Grid textAlign="center">
            {displayAwards()}
        </Grid>
        </div>
    );
}


export default Awards;