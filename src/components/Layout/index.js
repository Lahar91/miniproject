import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}> {/* Mengatur minHeight untuk layout */}
      {/* Sidebar (Sider) */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link href="/">Home</Link>, // Link ke halaman Home
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link href="/products">Products</Link>, // Link ke halaman Products
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link href="/about">About</Link>, // Link ke halaman About
            },
          ]}
        />
      </Sider>

      {/* Main Layout with Header and Content */}
      <Layout>
        {/* Navbar (Header) */}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          {/* Navbar Items */}
          <div style={{ marginRight: '20px' }}>
            <Menu mode="horizontal" selectable={false}>
              <Menu.Item key="contact">
                <Link href="/contact">Contact</Link>
              </Menu.Item>
              <Menu.Item key="services">
                <Link href="/services">Services</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>

        {/* Content Area */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 'calc(100vh - 64px)', // Tinggi minimum mengikuti tinggi viewport
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children} {/* Konten yang akan ditampilkan */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;