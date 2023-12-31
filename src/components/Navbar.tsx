import { Component } from 'react';
import { Link } from 'react-scroll';
import logo from 'images/logo.svg';
import { id as helloId } from 'res/landing/hello';
import {
  id as educationId,
  title as educationTitle,
} from 'res/landing/education';
import { id as workId, title as workTitle } from 'res/landing/work';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white z-1400 invisible sm:visible">
        <div className="w-full max-w-4xl flex flex-row items-center m-auto pr-10 pl-10 pt-2 pb-2">
          {this.createNavbarLogo()}
          <div className="flex flex-row items-center justify-center w-full h-full">
            {this.createNavbarLink(
              `navbar-${educationId}`,
              educationId,
              educationTitle
            )}
            {this.createNavbarLink(`navbar-${workId}`, workId, workTitle)}
          </div>
        </div>
      </nav>
    );
  }

  private createNavbarLogo() {
    return (
      <Link
        key="navbar-logo"
        className="cursor-pointer"
        activeClass=""
        to={helloId}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        <img className="h-8" src={logo} alt="logo full name" />
      </Link>
    );
  }

  private createNavbarLink(key: string, to: string, text: string) {
    return (
      <Link
        key={key}
        className="
        flex h-full items-center pl-6 pr-6 pt-3 pb-3
        text-base text-textblack hover:bg-green hover:rounded-3xl hover:text-white cursor-pointer no-underline"
        activeClass=""
        to={to}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        {text}
      </Link>
    );
  }
}
