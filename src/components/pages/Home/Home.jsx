import React from 'react';
import Parent from '../../Parent';
import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.Home}>
    <Parent />
  </div>
);

export default Home;
