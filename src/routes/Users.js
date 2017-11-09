import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import MainLayout from '../components/MainLayout/MainLayout';

function Users({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
      1231231
      </div>
    </MainLayout>
  );
}

export default connect()(Users);
