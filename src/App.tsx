import React from 'react';
import logo from 'images/working3.svg';
import Navbar from 'components/Navbar';
import Landing from 'content/Landing';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
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
