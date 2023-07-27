import React from 'react';
import logo from './images/working3.svg';

export default function App() {
  return (
    <div>
      <header className='flex flex-row items-center justify-center bg-themeDarkBlue-950'>
        <img className='h-44 m-6' src={logo} alt="test"/>
        <div className='max-w-2xl'>
          <h1 className='mb-2 text-6xl font-extralight text-white'>
            Hi there!
          </h1>
          <p className='text-lg font-light text-white text-opacity-70'>This is someone's personal playground. And here is some more text to make it look more sophisticated.</p>
        </div>
      </header>
    </div>
  );
}
