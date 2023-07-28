import React from 'react';
import logo from 'images/working3.svg';
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
      <div className="bg-black pt-5 sm:mt-16 sm:pt-0">
        <Landing />
      </div>
    </div>
  );
}

function Header() {
  const title = 'Hi there!';
  const subtitle =
    "This is someone's personal playground. And here is some more text to make it look more sophisticated.";

  return (
    <div>
      <header className="flex flex-row items-center justify-center">
        <img className="h-44 m-6" src={logo} alt="logo" />
        <div className="max-w-2xl mr-6">
          <h1 className="mb-2 text-6xl font-extralight text-white">{title}</h1>
          <p className="text-lg font-light text-white text-opacity-70">
            {subtitle}
          </p>
        </div>
      </header>
    </div>
  );
}
