import React from 'react';
import styles from './QjdBreadcrumb.less';
import { Breadcrumb, Icon } from 'antd';


function QjdBreadcrumb({ children, location }) {
	const lastChildren = children instanceof Array ? children[children.length -1] : '';
  return (
  	<div className={styles.breadCrumb}>
	  	<h3 className={styles.title}>{lastChildren}</h3>
	    <Breadcrumb>
	    	<Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
	      {
	      	children.map( (item, idx) => {
	      		return <Breadcrumb.Item key={idx}>{item}</Breadcrumb.Item>
	      	})
	      }
	    </Breadcrumb>
    </div>
  );
}

export default QjdBreadcrumb;
