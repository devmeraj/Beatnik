import React from 'react';

import Slider from '../slider/Slider.component';
import Navigation from '../navigation/Navigation.components';
import "./Header.styles.scss";


const Header = () => (
    <div className="header">
        <Navigation />
        <Slider />
    </div>
);

export default Header;