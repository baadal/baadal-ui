import React from 'react';
import { Link } from "react-router-dom";
import { BsLayersHalf } from 'react-icons/bs';
import { Button } from '@baadal-sdk/baadal-ui';
import styles from '../demo/button-demo.module.css';

function ButtonDemo() {
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>Button Component Preview</div>

      <div>switch</div>

      <div className={styles.section}>
        <div className={styles.sectionBody}>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="solid">Solid</Button>
          <Button variant="solid" raised="lg" icon={BsLayersHalf}>Raised</Button>
          <Button variant="solid" disabled>Disabled</Button>
        </div>
        <div className={`${styles.sectionBody} ${styles.mt15}`}>
          <Button color="secondary" variant="text">Text</Button>
          <Button color="secondary" variant="outlined">Outlined</Button>
          <Button color="secondary" variant="solid">Solid</Button>
          <Button color="secondary" variant="solid" raised="lg" icon={BsLayersHalf}>Raised</Button>
          <Button color="secondary" variant="solid" disabled>Disabled</Button>
        </div>
        <div className={`${styles.sectionBody} ${styles.mt15}`}>
          <Button color="success" variant="text">Text</Button>
          <Button color="success" variant="outlined">Outlined</Button>
          <Button color="success" variant="solid">Solid</Button>
          <Button color="success" variant="solid" raised="lg" icon={BsLayersHalf}>Raised</Button>
          <Button color="success" variant="solid" disabled>Disabled</Button>
        </div>
        <div className={`${styles.sectionBody} ${styles.mt15}`}>
          <Button color="error" variant="text">Text</Button>
          <Button color="error" variant="outlined">Outlined</Button>
          <Button color="error" variant="solid">Solid</Button>
          <Button color="error" variant="solid" raised="lg" icon={BsLayersHalf}>Raised</Button>
          <Button color="error" variant="solid" disabled>Disabled</Button>
        </div>
        <div className={`${styles.sectionBody} ${styles.mt15}`}>
          <Button color="warn" variant="text">Text</Button>
          <Button color="warn" variant="outlined">Outlined</Button>
          <Button color="warn" variant="solid">Solid</Button>
          <Button color="warn" variant="solid" raised="lg" icon={BsLayersHalf}>Raised</Button>
          <Button color="warn" variant="solid" disabled>Disabled</Button>
        </div>
        <div className={`${styles.sectionBody} ${styles.mt15}`}>
          <Button color="info" variant="text">Text</Button>
          <Button color="info" variant="outlined">Outlined</Button>
          <Button color="info" variant="solid">Solid</Button>
          <Button color="info" variant="solid" raised="lg" icon={BsLayersHalf}>Raised</Button>
          <Button color="info" variant="solid" disabled>Disabled</Button>
        </div>
        <div className={`${styles.sectionBody} ${styles.mt15}`}>
          <Button color="dark" variant="text">Text</Button>
          <Button color="dark" variant="outlined">Outlined</Button>
          <Button color="dark" variant="solid">Solid</Button>
          <Button color="dark" variant="solid" raised="lg" icon={BsLayersHalf}>Raised</Button>
          <Button color="dark" variant="solid" disabled>Disabled</Button>
        </div>
        <div className={`${styles.sectionBody} ${styles.mt15}`}>
          <Button color="light" variant="text">Text</Button>
          <Button color="light" variant="outlined">Outlined</Button>
          <Button color="light" variant="solid">Solid</Button>
          <Button color="light" variant="solid" raised="lg" icon={BsLayersHalf}>Raised</Button>
          <Button color="light" variant="solid" disabled>Disabled</Button>
        </div>
      </div>

      <br />
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default ButtonDemo;
