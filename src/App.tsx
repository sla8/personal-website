import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Landing from 'content/Landing';

export default function App() {
  return (
    <div>
      <div className="invisible sm:visible">
        <Navbar />
      </div>
      <div className="visible fixed top-0 left-0 right-0 h-16 fixed bg-black sm:invisible">
        <Sidebar />
      </div>
      <div className="pt-5 sm:mt-16 sm:pt-0">
        <Landing />
      </div>
    </div>
  );
}
