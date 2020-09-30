import React from 'react';
import { Grid, List } from 'semantic-ui-react';

import './FooterCopyright.styles.scss';

const FooterCopyright = () => {
    return (
        <div className="footer-copyright">
        <Grid container textAlign="left" divided>
        
        <Grid.Column width={8}>
        
            <List horizontal>
                <List.Item>
                    Sitemap
                </List.Item>
                
                <List.Item>
                    Disclaimer
                </List.Item>

                <List.Item>
                    Privacy Policy
                </List.Item>
            </List>
        
        </Grid.Column>


        <Grid.Column textAlign="right" width={8}>
            <p>Copyright &copy; 2020 all rights reserved</p>
        </Grid.Column>
        </Grid>
        </div>
        
        
    );
}


export default FooterCopyright;