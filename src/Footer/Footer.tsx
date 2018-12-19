import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Footer.css'

const cnFooter = cn("Footer")
 
const Footer = () => {
    return ( <footer className={cnFooter()}/> );
}
 
export default Footer;