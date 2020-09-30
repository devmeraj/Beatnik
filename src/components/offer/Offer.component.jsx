import React from 'react';
import {Image} from 'semantic-ui-react';

import quote from '../../assets/quote.png';
import './Offer.styles.scss';

const Offer = () => {
    return (
        <>
            <Image src={quote} fluid/>
            <div className="quote-content">
                <p>For our valued customers</p>
                <h2>Save 10%</h2>
                <p>Every car insurance type, every plan and every insurance</p>
                <p className="terms">*Terms and condition apply</p>
            </div>
        </>
    );
}

export default Offer;