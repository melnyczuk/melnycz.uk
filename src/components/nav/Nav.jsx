import React from 'react';

const NavButtons = (
  {
    buttons = []
  }
) => {
  return buttons.map(([label, link], i) => {
    return (
      <button 
        key={i} 
        className={'nav-button'} 
        id={String(label).toLowerCase()} 
      >
        <a href={link}>
          {label}
        </a>
      </button>
    );
  });
}

export const NavBar = (
  {
    title,
    buttons
  }
) => {
  return (
    <nav id='nav' className='nav'>
      {title && <h1 className='nav-title'>{title}</h1>}
      <NavButtons buttons={buttons} />
    </nav>
  );
}
