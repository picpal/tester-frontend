import React from 'react';

const Header = () => {
  return (
  <header>
    <div>
      <h1>logo</h1>
      <div className='nav '>
        <ul className='flex-1'>
          <li><a>WEB Test</a></li>
          <li><a>API Test</a></li>
          <li><a>Settings</a></li>
        </ul>
      </div>
    </div>
  </header>
  );
};


export default Header;