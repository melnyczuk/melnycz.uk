import React from 'react';

const NavButtons = (
  {
    buttons = []
  }
) => {
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

const NavBar = (
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

export default NavBar;
