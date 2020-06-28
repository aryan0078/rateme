import React, { Component } from 'react';
import styles from './Header.module.css'
class Header extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.logo}></div>
                <h1 className={styles.branding}>Rate Me</h1>
            </div>
        );
    }
}

export default Header;