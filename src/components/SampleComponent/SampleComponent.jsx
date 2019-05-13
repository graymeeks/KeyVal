import React from 'react';
import styles from './SampleComponent.scss';

const SampleComponent = () => (
  <div data-test-hook="SampleComponentPage" className={styles.sampleComponent}>
    <p>
Test
    </p>
  </div>
);

export default SampleComponent;
