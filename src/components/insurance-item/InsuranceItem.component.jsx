import React from 'react';
import {Button, Card, Grid, Icon} from 'semantic-ui-react';
import './InsuranceItem.styles.scss';

const InsuranceItem = ({insurance}) => {
    const {title, description} = insurance;
    return (
            <Grid.Column className="insurance-item">
                <Card>
                    <Card.Content header={title} as="h2" />
                    <Card.Content description={description} />
                    <Card.Content extra>
                        <Button style={{background: '#fff', border: '1px solid #0177c9'}} labelPosition="right" icon>
                            <Icon style={{color: '#0177c9'}} name="arrow alternate circle right" />
                            Learn more
                        </Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
    )
}

export default InsuranceItem;