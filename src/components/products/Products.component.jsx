import React, {useState} from 'react';
import {Grid, Menu, Image, Header, Button} from 'semantic-ui-react';

import productSection from '../../assets/products-section.png';

import "./Products.styles.scss";


const Products = () => {
    const [activeItem, setActiveItem] = useState('savings');

    
    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
    }

    return (
        <div className="products">
            
            <Grid container>
            <div className="sub-info">
            <Header className="products-header" as="h2">Our <span>Products</span></Header>
            <p className="product-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deserunt officia atque quod repudiandae amet quis autem placeat aut blanditiis, molestias numquam unde? Nostrum alias, dolores optio dolore iure beatae.</p>
            </div>
            
                <Grid.Row style={{background:"#fff", padding: 0}}>
                    
                <Grid.Column style={{padding: 0}} textAlign="left" width={4}>
                    <Menu className="product-menu" fluid vertical tabular>
                        <Menu.Item
                        name='savings'
                        active={activeItem === 'savings'}
                        onClick={ handleItemClick}
                        />
                        <Menu.Item
                        name='early_cash'
                        active={activeItem === 'early_cash'}
                        onClick={ handleItemClick}
                        />
                        <Menu.Item
                        name='children'
                        active={activeItem === 'children'}
                        onClick={ handleItemClick}
                        />
                        <Menu.Item
                        name='retirements'
                        active={activeItem === 'retirements'}
                        onClick={ handleItemClick}
                        />
                    </Menu>
                    </Grid.Column>

                    <Grid.Column style={{padding: 0}} stretched width={12}>
                    
                        <Grid container columns={2} verticalAlign="middle">
                            <Grid.Column textAlign="left" className="middle-content">
                                <Header as="h3">Sanchay</Header>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum debitis in eum corrupti aperiam dolorib</p>
                                <p><a href="/" className="details">Details &gt;</a></p>
                                <div className="footer">
                                    <a href="/">Calculate Premium</a>
                                    <Button size="large" style={{background: '#f7941e'}} inverted>Book an appointment</Button>
                                </div>

                                <div className="bottom">
                                
                                    <Button icon="angle left" />
                                    <Button icon="angle right" />
                                </div>
                            </Grid.Column>
                            
                            <Grid.Column style={{padding: 0}}>
                                <Image src={productSection} fluid />
                            </Grid.Column>
                            
                        </Grid>
                    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <div style={{textAlign: "center", marginTop: '40px'}}>
                <Button className="view-btn" size="large" style={{ fontWeight: 300, color: '#fff' , backgroundColor: '#232075'}}>View All</Button>

            </div>
            
        </div>
    );
}

export default Products;