import React from 'react';
import { List, Image, Grid, Icon, Header } from 'semantic-ui-react';
import "./Footer.styles.scss";
import logo from '../../assets/beatnik.png';

const Footer = () => {
    return (
        <>
        <div id="footer">
        <Grid textAlign="center" container>
            <Grid.Column tablet={12} computer={3} textAlign="left">
                <Image src={logo} style={{marginBottom: "80px"}} />

                <div className="tel" style={{marginBottom: "15px"}}>
                    <Header as="h4"><Icon name="call" color="orange" />1351</Header>
                </div>
                <div className="social-media">
                    <Icon name="facebook" size="large" />
                    <Icon name="linechat" size="large"  />
                    <Icon name="twitter" size="large"  />
                    <Icon name="youtube play" size="large"  />
                </div>
            </Grid.Column>

            <Grid.Column tablet={12} computer={3} textAlign="left">
            <List>
                <List.Item style={{color: "orange"}}>Apples</List.Item>
                <List.Item>Pears</List.Item>
                <List.Item>Oranges</List.Item>
                <List.Item>Pears</List.Item>
                <List.Item>Oranges</List.Item>
            </List>
            </Grid.Column>
            <Grid.Column tablet={12} computer={3} textAlign="left">
            <List>
                <List.Item style={{color: "orange"}}>Apples</List.Item>
                <List.Item>Pears</List.Item>
                <List.Item>Oranges</List.Item>
                <List.Item>Pears</List.Item>
                <List.Item>Oranges</List.Item>
            </List>
            </Grid.Column>
            <Grid.Column tablet={12} computer={3} textAlign="left">
            <List>
                <List.Item style={{color: "orange"}}>Apples</List.Item>
                <List.Item>Pears</List.Item>
                <List.Item>Oranges</List.Item>
                <List.Item>Pears</List.Item>
                <List.Item>Oranges</List.Item>
            </List>
            </Grid.Column>
            <Grid.Column tablet={12} computer={3} textAlign="left">
            <List>
                <List.Item style={{color: "orange"}}>Apples</List.Item>
                <List.Item style={{color: "orange"}}>Pears</List.Item>
                <List.Item style={{color: "orange"}}>Oranges</List.Item>
                <List.Item style={{color: "orange"}}>Pears</List.Item>
                <List.Item style={{color: "orange"}}>Oranges</List.Item>
            </List>
            </Grid.Column>
        </Grid>

        </div>
        
        
        </>
    );
}

export default Footer;