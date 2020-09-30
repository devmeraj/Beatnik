import React from 'react';
import {Grid,Card} from 'semantic-ui-react';

import './ArticleItem.styles.scss';

const ArticleItem = ({article}) => {

    const {title, body, ImageURL} = article;
    return (
        <Grid.Column>
            
            <Card
                className="article-item"
                image={ImageURL}
                header={title}
                description={body}
            />
        </Grid.Column>
            
        
        
    );
}

export default ArticleItem;