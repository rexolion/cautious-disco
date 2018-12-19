import * as React from 'react';
import {cn} from '@bem-react/classname'
import './Header.css'

const cnHeader = cn("Header")


const Header = () => {
    return (
        <header className={cnHeader()}/>
           
    )
}

export default Header;