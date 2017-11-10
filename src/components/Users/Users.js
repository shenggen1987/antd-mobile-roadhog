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
  function toDetail(id) {
    const params = queryString.stringify({ id });
    dispatch(routerRedux.push({
      pathname: 'detail',
      search: params,
    }));
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
        className={styles.row}
      />
    );
  let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} className={styles.rowitem}>
          <div
            className={styles.author}
          >{obj.author.loginname} {obj.create_at.slice(0, 10)}</div>
          <div className={styles.item}>
            <img className={styles.img} src={obj.author.avatar_url} alt="" />
            <div>
              <div className={styles.title} onClick={toDetail.bind(null,obj.id)}>{obj.title}</div>
            </div>
          </div>
        </div>
      );
    };
    const hei = document.documentElement.clientHeight - 100;
  return (
    <ListView
      dataSource={dataSource}
      renderHeader={() => <span>主题列表</span>}
      renderFooter={() => (<div className={styles.loading}>
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
