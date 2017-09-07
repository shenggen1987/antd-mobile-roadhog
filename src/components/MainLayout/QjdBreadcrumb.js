import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import styles from './QjdBreadcrumb.less';


function QjdBreadcrumb({ children }) {
  let lastChildren = '';
  if (children instanceof Array) {
    lastChildren = children[children.length - 1];
  }
  const rows = children.map((item, idx) => {
    return {
      uid: 1001 + idx,
      value: item,
    };
  });
  return (
    <div className={styles.breadCrumb} >
      <h3 className={styles.title}>{lastChildren}</h3>
      <Breadcrumb>
        <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
        {
          rows.map((item) => {
            return <Breadcrumb.Item key={item.uid} >{item.value}</Breadcrumb.Item>;
          })
        }
      </Breadcrumb>
    </div>
  );
}

export default QjdBreadcrumb;
