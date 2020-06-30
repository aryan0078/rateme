import React, { Component } from 'react';
import styles from './Cards.module.css'
class Cards extends Component {
    render() {
        return (
            <div class="card" className={styles.card} style={{background:this.props.back}}>
            <div className={styles.top}>
                <h1 className={styles.title}>By Tesla</h1>
            </div>
              
                   <div className={styles.like}></div>
               </div>
        );
    }
}

export default Cards;