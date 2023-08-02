import { Component } from 'react';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import 'components/Sidebar.css';
import logo from 'images/logo-silviala.svg';
import { id as helloId } from 'res/landing/hello';
import {
  id as educationId,
  title as educationTitle,
} from 'res/landing/education';
import { id as workId, title as workTitle } from 'res/landing/work';

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
        <Link
          key="sidebar-logo"
          activeClass="active"
          to={helloId}
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          onClick={() => this.closeMenu()}
        >
          <img className="w-24" src={logo} alt="logo full name" />
        </Link>
        <Link
          key={`sidebar-${educationId}`}
          activeClass="active"
          to={educationId}
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          onClick={() => this.closeMenu()}
        >
          {educationTitle}
        </Link>
        <Link
          key={`sidebar-${workId}`}
          activeClass="active"
          to={workId}
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          onClick={() => this.closeMenu()}
        >
          {workTitle}
        </Link>
        <Link
          key="sidebar-logo"
          activeClass="active"
          to="test-section"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          onClick={() => this.closeMenu()}
        >
          Lorem ipsum
        </Link>
      </Menu>
    );
  }
}
