import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { navitems } from 'placeholder/Navigation';
import 'components/Sidebar.css';

export default function Sidebar(props: any) {
  return (
    <Menu right>
      {navitems.map((navitem) => (
        <div key={navitem}>{navitem}</div>
      ))}
    </Menu>
  );
}
