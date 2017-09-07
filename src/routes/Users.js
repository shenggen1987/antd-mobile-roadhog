import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';
import QjdBreadcrumb from '../components/MainLayout/QjdBreadcrumb';

function Users({ location }) {
  return (
    <MainLayout location={location}>
    	<QjdBreadcrumb>
    		<span>客户关系管理</span>
    		<span>我的客户列表</span>
	    </QjdBreadcrumb>
      <div className={styles.normal}>
        <UsersComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Users);
