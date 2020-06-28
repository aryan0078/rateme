import React, { Component } from 'react';
import styles from './Home.module.css'
import Header from '../components/Header'
class Home extends Component {
    render() {
        return (
            <>
          
            <div className={styles.main}>
            <Header/>
              <div class="card" className={styles.card} >
<div className={styles.top}>
    <h1 className={styles.title}>By Tesla</h1>
</div>
  
       <div className={styles.like}></div>
   </div>
   <div class="card" className={styles.card} id={styles.x} >
<div className={styles.top}>
    <h1 className={styles.title}>By NASA</h1>
</div>
  
       <div className={styles.like}></div>
   </div>
   <div class="card" className={styles.card} id={styles.p} >
<div className={styles.top}>
    <h1 className={styles.title}>By NIVIDIA</h1>
</div>
  
       <div className={styles.like}></div>
   </div>
   <div class="card" className={styles.card} >
<div className={styles.top}>
    <h1 className={styles.title}>By MSI</h1>
</div>
  
       <div className={styles.like}></div>
   </div>
            </div >
        </>);
    }
}

export default Home;