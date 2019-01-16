import React from 'react';

function NavButtons(buttons = []) {
  return buttons.map((button, i) => {
    return (
      <div key={i} className="nav-button" id={button} >
        <a href={button}>
          {button}
        </a>
      </div>
    );
  });
}

function NavBar({ title, buttons, classes = [] }) {
  const id = `nav-title-${String(title).replace(' ', '-')}`;
  const className = [...classes].join(' ') || null;
  return (
    <nav className={className} >
      {title && <h1 id={id} >{title}</h1>}
      { NavButtons(buttons) }
    </nav>
  );
}

export default NavBar;
