import React from 'react';
import {Feed, Image, Header} from 'semantic-ui-react';


import './NewsItem.styles.scss';

const NewsItem = ({post}) => {
    
    const {title, ImageURL} = post;
    
    return (
        <Feed.Event className="news-item">
          <Image src={ImageURL} floated="left" size="tiny" style={{height: "50px"}}/>
          <Feed.Content>
            <Header as="h4" style={{fontSize: "14px", fontWeight: '300'}}>
              {title}
            </Header>
          </Feed.Content>
        </Feed.Event>
    );
}

export default NewsItem;