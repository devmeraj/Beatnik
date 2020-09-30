import React from 'react';

import {Grid} from 'semantic-ui-react';

import ArticleItem from '../article-item/ArticleItem.component';
import './Articles.styles.scss';

const displayPosts = (articles) => {
    
    return articles.filter(((article, index) => index < 2))
    .map(article => {
        return <ArticleItem article={article} />
    })
}

const Articles = ({posts}) => {
    return (
            <Grid columns="2">
                {displayPosts(posts)}
            </Grid>
            
    )
}

export default Articles;