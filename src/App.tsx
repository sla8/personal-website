import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Landing from 'content/Landing';
import { Link } from 'react-scroll';
import { title as helloTitle } from 'res/landing/hello';
import logo from 'images/logo-silviala.svg';

export default function App() {
  return (
    <div>
      <div className="invisible sm:visible">
        <Navbar />
      </div>
      <div className="visible fixed top-0 left-0 right-0 h-16 fixed bg-black sm:invisible">
        <div className="fixed z-10 pl-10 pr-10 pt-5">
          <Link
            key="navbar-logo"
            className="cursor-pointer"
            activeClass=""
            to={helloTitle}
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
          >
            <img className="h-6" src={logo} alt="logo full name" />
          </Link>
        </div>
        <Sidebar />
      </div>
      <div className="pt-5 sm:mt-12 sm:pt-0">
        <Landing />
      </div>
    </div>
  );
}
