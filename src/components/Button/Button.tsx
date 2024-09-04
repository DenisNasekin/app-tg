import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

type ButtonPros = {
    text: string;
    link: string;
}

const Button: React.FC<ButtonPros> = ({text, link}) => {
    return (
        <Link className="button" to={link}>{text}</Link>
    );
}

export default Button;