import React from 'react';

const NavButtons = (
  {
    buttons = []
  }
) => {
  return buttons.map(([label, link], i) => {
    return (
      <button key={i} className={'nav-button'} id={label} >
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
    buttons,
    classes = []
  }
) => {
  const id = `nav-title-${String(title).replace(' ', '-')}`;
  const className = [...classes].join(' ') || null;
  return (
    <nav className={className} >
      {title && <h1 id={id} >{title}</h1>}
      <NavButtons buttons={buttons} />
    </nav>
  );
}
