import React, { Component } from 'react';
import { navitems } from 'res/placeholder/Navigation';
import { Link } from 'react-scroll';
import 'components/Navbar.css';
import { title as helloTitle, text as helloText } from 'res/landing/hello';

interface NavbarItem {
  key: string;
  to: string;
  text: string;
}

export default class Navbar extends Component {
  render() {
    return (
      <nav className="fixed top-0 left-0 right-0">
        <div className="flex flex-row items-center justify-center bg-black h-16 pl-3 pr-3">
          <this.NewItem key={helloTitle} to={helloTitle} text={helloTitle} />
          {navitems.map((navitem) => (
            <this.NewItem
              key={navitem}
              to={`section${navitem}`}
              text={navitem}
            />
          ))}
        </div>
      </nav>
    );
  }

  private NewItem(props: NavbarItem) {
    return (
      <Link
        key={props.key}
        className="navitem"
        activeClass="active"
        to={props.to}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        {props.text}
      </Link>
    );
  }
}
