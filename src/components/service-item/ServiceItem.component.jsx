import React from 'react';
import {Grid, Segment, Image, Header} from 'semantic-ui-react';
import "./ServiceItem.styles.scss";

const ServiceItem = ({title, imageUrl, color, textColor}) => {
    // const ImageURL = require(imageUrl)
    // console.log(require(imageUrl))
    return (
        <Grid.Column tablet={16} computer={4}>
            <Segment clearing style={{background: color}}>
                <Image floated="left" style={{marginBottom: 0, marginRight: 0}} src={imageUrl} />
                <Header as="h3" style={{color: textColor, marginTop: "35px"}}>{title}</Header>
            </Segment>
        </Grid.Column>
    );
}

export default ServiceItem;