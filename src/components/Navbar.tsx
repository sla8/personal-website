import React, { Component } from 'react';
import { navitems } from 'placeholder/Navigation';
import logo from 'images/working3.svg';

export default class Navbar extends Component {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    return (
      <nav className="fixed top-0 left-0 right-0">
        <div className="flex flex-row items-center justify-center bg-black h-16 pl-3 pr-3">
          <div
            className="flex pl-6 pr-6 h-full text-lg font-extralight uppercase text-textwhite items-center"
            onClick={this.scrollToTop}
          >
            Hello
          </div>
          {navitems.map((navitem) => (
            <div
              key={navitem}
              className="flex pl-6 pr-6 h-full text-lg font-extralight uppercase text-textwhite items-center"
            >
              {navitem}
            </div>
          ))}
        </div>
      </nav>
    );
  }
}
