import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
                alt="logo"
            />
            <div className={styles.login_block}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>LogIn</NavLink>}
            </div>
        </header>
    );
};

export default Header;
