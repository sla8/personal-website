import React, { Component } from 'react';
import { navitems } from 'placeholder/Navigation';
import { Link } from 'react-scroll';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="fixed top-0 left-0 right-0">
        <div className="flex flex-row items-center justify-center bg-black h-16 pl-3 pr-3">
          {navitems.map((navitem) => (
            <Link
              key={navitem}
              className="flex pl-6 pr-6 h-full text-lg font-extralight uppercase text-textwhite items-center"
              activeClass="active"
              to={`section${navitem}`}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
            >
              {navitem}
            </Link>
          ))}
        </div>
      </nav>
    );
  }
}
