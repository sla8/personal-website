import { Component } from 'react';
import { Link } from 'react-scroll';
import logo from 'images/logo-silviala.svg';
import { id as helloId } from 'res/landing/hello';

interface NavbarLinkInput {
  key: string;
  to: string;
  text: string;
}

export default class Navbar extends Component {
  render() {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-black">
        <div className="w-full max-w-4xl flex flex-row items-center m-auto pr-10 pl-10">
          <this.NavbarLogo />
          <div className="flex flex-row items-center justify-center w-full h-full">
            <this.NavbarLink
              key={'test'}
              to={'test-section'}
              text={'Lorem ipsum'}
            />
          </div>
        </div>
      </nav>
    );
  }

  private NavbarLogo() {
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

  private NavbarLink(props: NavbarLinkInput) {
    return (
      <Link
        key={props.key}
        className="
        flex h-full items-center pl-6 pr-6 pt-3 pb-3
        text-base font-light uppercase text-textwhite hover:border-t-8 hover:pt-1 hover:border-darkblue cursor-pointer"
        activeClass=""
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
