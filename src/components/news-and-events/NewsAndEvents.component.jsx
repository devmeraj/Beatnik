import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import Articles from '../articles/Articles.component';
import RecentNews from '../recent-news/RecentNews.component';

import './NewsAndEvents.styles.scss';

const posts = [
    {   
        "ImageURL": require('../../assets/news1.png'),
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "ImageURL": require('../../assets/news2.png'),
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "ImageURL": require('../../assets/news1.png'),
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "ImageURL": require('../../assets/news2.png'),
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "ImageURL": require('../../assets/news1.png'),
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "ImageURL": require('../../assets/news2.png'),
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
]

const NewsAndEvents = () => {
    return (
        <>
        <Grid textAlign="center" className="news-and-events">
            <Grid.Column tablet={16} computer={10}>
            <div className="sub-info">
            <Header className="products-header" as="h2">News &amp; <span>Events</span></Header>
            
            </div>
            </Grid.Column>
            <Grid.Column computer={7} tablet={16}>
                <Articles posts={posts} />
            </Grid.Column>
            <Grid.Column width={3}>
                <RecentNews posts={posts} />
            </Grid.Column>
        </Grid>
        <div style={{textAlign: "center", marginTop: '40px'}}>
                <Button size="large" className="view-btn" style={{ fontWeight: 300, color: '#fff' , backgroundColor: '#232075'}}>View All</Button>

            </div>
        </>
    )
}

export default NewsAndEvents;