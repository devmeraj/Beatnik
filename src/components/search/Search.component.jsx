import React, { useState } from 'react';
import { Form, Grid, Button, Segment, Icon } from 'semantic-ui-react';

import "./Search.styles.scss";

const Search = () => {
    const [searchVisibility, setSearchVisibility] = useState(false);
    const searchToggle = () => {
        setSearchVisibility(!searchVisibility);
    }
    const inputBlur = () => {
        setSearchVisibility(false);
    }
    return (
        <div className="search">
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column tablet={16} computer={10}>
                    <Segment clearing >
                       <Form className="search-form">
                            <Button floated="left" icon='search' color='orange' size='big' />                            
                            <Form.Field className="search-field">
                                {!searchVisibility ? (<h3 onClick={searchToggle}>Are you looking for something?</h3>) : 
                                 (<Form.Input onBlur={inputBlur} placeholder="Search here"></Form.Input>)}
                            </Form.Field>
                            <Segment className="search-filter" style={{marginTop: 0}}>
                                <div>
                                    <Icon name="clipboard check" size="big" color="orange" />
                                    Products
                                </div>
                                <div>
                                    <Icon name="user doctor" size="big" color="orange" />
                                    Hospital
                                </div>
                                <div>
                                    <Icon name="point" size="big" color="orange" />
                                    Branch
                                </div>
                                
                            </Segment>
                        </Form>
                    </Segment>
                    
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Search;