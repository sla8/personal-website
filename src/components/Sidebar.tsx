import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import { navitems } from 'placeholder/Navigation';
import 'components/Sidebar.css';

export default class Sidebar extends Component<{}, { menuOpen: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { menuOpen: false };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state: any) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        right
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        {navitems.map((navitem) => (
          <Link
            key={navitem}
            activeClass="active"
            to={`section${navitem}`}
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            onClick={() => this.closeMenu()}
            className="font-extralight uppercase text-textwhite"
          >
            {navitem}
          </Link>
        ))}
      </Menu>
    );
  }
}
