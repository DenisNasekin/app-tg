import React from 'react';

import './Menu.css';
import Button from '../Button/Button';

const Menu: React.FC = () => {

    return (
        <section className="sectionMenu">
            <Button text="Home" link="/"/>
            <Button text="Weather" link="/weather"/>
            <Button text="Article" link="/article"/>
        </section>      
    );
}

export default Menu;