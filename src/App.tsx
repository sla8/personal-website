import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Landing from 'content/Landing';
import { Link } from 'react-scroll';
import { id as helloId } from 'res/landing/hello';
import logo from 'images/logo-silviala.svg';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FCA311',
    },
    secondary: {
      main: '#1D315C',
    },
  },
  typography: {
    h2: {
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: '400',
      marginBottom: '4px',
      WebkitFontSmoothing: 'antialiased',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '300',
      WebkitFontSmoothing: 'antialiased',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="invisible sm:visible">
        <Navbar />
      </div>
      <div className="visible fixed top-0 left-0 right-0 h-16 fixed bg-black sm:invisible z-1400">
        <div className="fixed z-1400 pl-10 pr-10 pt-5">
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
            <img className="h-6" src={logo} alt="logo full name" />
          </Link>
        </div>
        <Sidebar />
      </div>
      <div className="pt-5 sm:mt-12 sm:pt-0">
        <Landing />
      </div>
    </ThemeProvider>
  );
}
