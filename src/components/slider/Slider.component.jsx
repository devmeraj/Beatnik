import React from 'react';
import Carousel from 'react-elastic-carousel';
import {Grid} from 'semantic-ui-react';

import ProtectionPlan from '../protection-plans/ProtectionPlans.component';
import slide from '../../assets/slide.png';
import "./Slider.styles.scss";

const plans = [
    {id: '1', title: 'Savings', subTitle: 'Savings Plan', imageURL: require('../../assets/savings.png')},
    {id: '2', title: 'Early Cash', subTitle: 'Care Plan', imageURL: require('../../assets/early_plan.png')},
    {id: '3', title: 'Children', subTitle: 'Child Protection Plan', imageURL: require('../../assets/children.png')},
    {id: '4', title: 'Retirement', subTitle: 'Pension Plan', imageURL: require('../../assets/retirement.png')},
    {id: '5', title: 'Investment', subTitle: 'Surokkha', imageURL: require('../../assets/protection.png') }

];

const items = [
    {id: 1,  title: 'Family Protection Plan', url: slide, plans},
    {id: 2, title: 'item #2', url: slide, plans: plans},
  ]

const displayProtectionPlans = (plans) => {
    if(!plans) return '';
    
    return plans.map( plan => {
        return(
            <Grid.Column textAlign="center" key={plan.id} mobile={4} tablet={3} computer={2}>
                <ProtectionPlan plan={plan} />
            </Grid.Column>
        )
    });
}

const Slider = () => {
    return (
        <div className="slider">
            <Carousel pagination={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                {items.map(item => <div className="single-slide" style={{backgroundImage: `url(${item.url})`, height: "500px", width: "100%"}} key={item.id}>
                    <div className="carousel-content">
                        <h2 className="title">{item.title}</h2>
                        <Grid>
                            {displayProtectionPlans(item.plans)}
                        </Grid>
                    </div>
                </div>)}
            </Carousel>
        </div>
    );
}

export default Slider;