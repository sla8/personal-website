import { Component } from 'react';
import { Link } from 'react-scroll';
import {
  title as helloTitle,
  navTitle as helloNavTitle,
} from 'res/landing/hello';

interface NavbarLinkInput {
  key: string;
  to: string;
  text: string;
}

export default class Navbar extends Component {
  render() {
    return (
      <nav className="fixed top-0 left-0 right-0">
        <div className="flex flex-row items-center justify-center bg-black h-16 pl-3 pr-3">
          <this.NavbarLink
            key={helloTitle}
            to={helloTitle}
            text={helloNavTitle}
          />
        </div>
      </nav>
    );
  }

  private NavbarLink(props: NavbarLinkInput) {
    return (
      <Link
        key={props.key}
        className="
        flex h-full items-center pl-6 pr-6
        text-lg font-extralight uppercase text-textwhite
        hover:text-white hover:bg-gradient-to-b from-darkblue/50 to-black"
        activeClass="bg-gradient-to-b from-darkblue to-black text-white"
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
