import { ConfigProvider, Breadcrumb, Layout, Menu } from 'antd';

import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import styles from './index.less'

const { Header, Content, Footer } = Layout;
const renderBreadCrumb = (pathname) => {
  let arr = pathname.split('/').slice(1);
  if (arr[0] === '') {
    arr[0] = 'Home';
  }
  return (
    <Breadcrumb className={styles.breadcrumb}>
      {arr.map((name) => {
        return <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};
function BasicLayout({ children, location }) {
  let selectKey = '/' + location.pathname.split('/')[1];
  return (
    <ConfigProvider>
      <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo}>Qiankun</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
          selectedKeys={[selectKey]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/demo">
            <Link to="/demo">Dem</Link>
          </Menu.Item>
        </Menu>
        
      </Header>
      <Content className={styles.content}>
         {renderBreadCrumb(location.pathname)}
        {children}
      </Content>
      <Footer className={styles.footer}>
        罗慕科技（北京）有限公司 版权所有 © 2022
      </Footer>
      </Layout>
      
    </ConfigProvider>
  );
}
export default BasicLayout;
