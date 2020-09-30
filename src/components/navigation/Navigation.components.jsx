import React, {useState} from 'react';
import {Menu, Button, Icon, Select, Image} from 'semantic-ui-react';
import logo from '../../assets/beatnik.png';
import headphone from '../../assets/headphone.png';
import "./Navigation.styles.scss";


const Navigation = () => {
    const [activeItem, setActiveItem] = useState('');
    const [stacked, setStacked] = useState('ture');

    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
    }

    const toggleNav = () => {
        setStacked(!stacked);
    }

    
    return (
        <div className="navigation">
            <Menu stackable secondary>
            <Menu.Item>
                <Image src={logo} />
                <Button
                    color="orange"
                    icon="align justify"
                    style={{ position: "absolute", right: "10px", top: "50%"}}
                    onClick={toggleNav}
                    className="toggleNav"/>
            </Menu.Item>
            {!stacked ? '' : (
            <>
            <Menu.Item
                name='products'
                active={activeItem === 'products'}
                onClick={handleItemClick}
                
            />
            
            <Menu.Item
                name='claims'
                active={activeItem === 'claims'}
                onClick={handleItemClick}
                
            />
            <Menu.Item
                name='support'
                active={activeItem === 'support'}
                onClick={handleItemClick}
            />

            <Menu.Item
                name='rewards'
                active={activeItem === 'rewards'}
                onClick={handleItemClick}
            /> 

            <Menu.Item
                name='group'
                active={activeItem === 'group'}
                onClick={handleItemClick}
                className="nav-page"
                style={{borderLeft: "1px solid #e3e3e3"}}
            >
                Group insurance
            </Menu.Item>

            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={handleItemClick}
                className="nav-page"
                
            >
                About us
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button color="orange">Login</Button>
                </Menu.Item>
                <Menu.Item>
                    <Image src={headphone} size="mini" />
                </Menu.Item>
                <Menu.Item>
                    <Icon color="orange" name="search" size="large"/>
                </Menu.Item>
                <Menu.Item>
                    <Select style={{minWidth: "1em", width: "5em"}} placeholder='EN' icon="arrows alternate vertical" options={[{key: 'en', value:'en', text:'EN'}, {key: 'bn', value:'bn', text:'BN'}]} />
                </Menu.Item>
                
            </Menu.Menu>
            </>)}
            
            
            </Menu>
        </div>
    );
};

export default Navigation;