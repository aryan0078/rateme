import React, { Component } from 'react';
import styles from './Home.module.css'
import Header from '../components/Header'
import Cards from '../components/Cards'
import FlatList from 'flatlist-react';
var l='https://source.unsplash.com/user/erondu/700x700'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={data:[{url: l, votes:16},
            {url: l, votes:14},
            {url: l, votes:110},
            {url: l, votes:151},
            {url: l,votes:115},
            {url: l, votes:114},
            {url: l,votes:131},
            {url: l, votes:141},
            {url: l, votes:150}]}
    }
    renderPerson = (person, idx) => {
        return (
            <Cards />
        );
      }
    render() {
        return (
            <>
          
            <div className={styles.main}>
            <Header/>
     
            <FlatList
          list={this.state.data}
          renderItem={this.renderPerson}
          renderWhenEmpty={() => <div>List is empty!</div>}
          
        />

            </div >
        </>);
    }
}

export default Home;