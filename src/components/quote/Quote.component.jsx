import React from 'react';
import { Grid } from 'semantic-ui-react';

import Offer from '../offer/Offer.component';
import QuoteForm from '../quote-form/QuoteForm.component';

import './Quote.styles.scss';

const Quote = () => {
    return (
        <div className="quote">
            <Grid textAlign="left">
                <Grid.Column className="offer" textAlign="center" tablet={16} computer={10}>
                    <Offer />
                </Grid.Column>
                <Grid.Column className="quote-right" textAlign="center" tablet={16} computer={6}>
                    <QuoteForm />
                </Grid.Column>

    
                
            </Grid>
        </div>
    );
}

export default Quote;