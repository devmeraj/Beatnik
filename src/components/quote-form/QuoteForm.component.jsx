import React from 'react';
import {Image, Form, Select} from 'semantic-ui-react';

import quoteRight from '../../assets/quote_right.png';
import './QuoteForm.styles.scss';

const yearOptions = [
    {key: 1, value: '2000', text: '2017'},
    {key: 2, value: '2018', text: '2018'},
    {key: 3, value: '2019', text: '2019'}
]

const brandOptions = [
    {key: 1, value: 'Ford', text: 'Ford'},
    {key: 2, value: 'Hundai', text: 'Hundai'},
    {key: 3, value: 'Audi', text: 'Audi'}
]


const QuoteForm = () => {
    return (
        <>
            <Image fluid src={quoteRight} style={{height: '100%'}} />
            <h3>Get an instant quote from Dhaka's leading <br /> insurance now!</h3>    

                <div className="quote-form">
                <Form>
                    <Form.Field>
                        <Select placeholder='Year' options={yearOptions} name="year"/>
                    </Form.Field>
                    <Form.Field>
                        <Select placeholder='Brand' options={brandOptions} name="brand"/>
                    </Form.Field>
                    <Form.Field>
                        <Select placeholder='Model' options={brandOptions} name="Model"/>
                    </Form.Field>
                    <Form.Field>
                        <Select placeholder='Sub Model' options={brandOptions} name="sub_model"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input placeholder="Name" type="text" name="name"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input placeholder="Phone" type="tel" name="phone" />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input placeholder="Email" type="email" name="email" />
                    </Form.Field>
                </Form>

                </div>
        </>
    );
}

export default QuoteForm;