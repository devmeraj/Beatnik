import React from 'react';
import {Card, Feed} from 'semantic-ui-react';
import NewsItem from '../news-item/NewsItem.component';

import './RecentNews.styles.scss'

const RecentNews = ({posts}) => {
    return (
    <div className="recent-news">
        <Card>
            <Card.Content>
                <Card.Header>Recent News</Card.Header>
            </Card.Content>
            <Card.Content>
            <Feed>
                {posts.filter(((post, index) => index < 5)).map(post => <NewsItem key={post.id} post={post} />)}
            </Feed>
            </Card.Content>
        </Card>
    </div>)
}

export default RecentNews;