import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Landing from 'content/Landing';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>;

const theme = createTheme({
  palette: {
    primary: {
      main: '#B0413E',
    },
    secondary: {
      main: '#548687',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sidebar />
      {createLanding()}
    </ThemeProvider>
  );
}

function createLanding() {
  return (
    <div className="pt-5 sm:mt-12 sm:pt-0">
      <Landing />
    </div>
  );
}
