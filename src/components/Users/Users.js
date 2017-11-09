import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import { ListView } from 'antd-mobile';
import styles from './Users.less';
import { PAGE_SIZE } from '../../constants';

function Users({ dispatch, list: data, loading, total, page: current }) {

  function onEndReached() {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    // if (this.state.isLoading && !this.state.hasMore) {
    //   return;
    // }
    dispatch({
      type: 'users/fetch',
      payload: {
        page: ++current,
      },
    });
  }
  if (!data) {
    return (
      <div>loading</div>
    );
  }
  const dataSource1 = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  });
  const dataSource = dataSource1.cloneWithRows(data);
  const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
  let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.author.loginname} {obj.create_at}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={obj.author.avatar_url} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.title}</div>
            </div>
          </div>
        </div>
      );
    };
    const hei = document.documentElement.clientHeight - 100;
  return (
    <ListView
      dataSource={dataSource}
      renderHeader={() => <span>header</span>}
      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
        {loading ? 'Loading...' : 'Loaded'}
      </div>)}
      renderRow={row}
      renderSeparator={separator}
      className="am-list"
      pageSize={30}
      style={{
          height: hei,
          overflow: 'auto',
        }}
      onScroll={() => { console.log('scroll'); }}
      scrollRenderAheadDistance={500}
      onEndReached={onEndReached}
      onEndReachedThreshold={100}
    />
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
