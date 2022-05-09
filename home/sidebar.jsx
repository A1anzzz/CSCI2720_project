import './sidebar.css';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <p className="menu-item" href="/">
        UserName
      </p>
      <a className="menu-item" href="/salads">
        Logout!
      </a>
      <a className="menu-item" href="/pizzas">
        favor!
      </a>
    </Menu>
  );
};