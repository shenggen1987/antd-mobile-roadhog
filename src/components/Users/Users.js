import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button, Checkbox } from 'antd';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import styles from './Users.less';
import { PAGE_SIZE } from '../../constants';
import UserModal from './UserModal';

function Users({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/users',
      search: queryString.stringify({ page }),
    }));
  }

  function editHandler(id, values) {
    dispatch({
      type: 'users/patch',
      payload: { id, values },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'users/create',
      payload: values,
    });
  }

  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'web站点',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div>
      <div className={styles.create}>
        <UserModal record={{}} onOk={createHandler}>
          <Button type="primary">创建储备客户</Button>
        </UserModal>
        <Button type="primary">批量导入白名单</Button>
      </div>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <div className={styles.normal}>
          <div>
            <Table
              columns={columns}
              dataSource={dataSource}
              loading={loading}
              rowKey={record => record.id}
              pagination={false}
              bordered
              title={() => {
                return (
                  <div>
                    <Checkbox > 白名单客户</Checkbox>
                    <Checkbox > 储备客户</Checkbox>
                  </div>
                );
              }}
            />
            <Pagination
              className="ant-table-pagination"
              total={total}
              current={current}
              pageSize={PAGE_SIZE}
              onChange={pageChangeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);
