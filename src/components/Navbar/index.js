import React from 'react';
import Link from 'next/link';
import { Menu } from "antd";

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home">
        <Link href="/">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link href="/about">
          About
        </Link>
      </Menu.Item>
      <Menu.Item key="products">
        <Link href="/products">Products</Link>
      </Menu.Item>
      <Menu.Item key="services">
        <Link href="/services">
          Services
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link href="/contact">
          Contact
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;