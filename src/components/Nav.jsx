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
  const id = String(title).replace(' ', '-');

  return (
    <div className={classes.join(' ')} >
      <h1 id={id} >{title}</h1>
      { NavButtons(buttons) }
    </div>
  );
}

export default NavBar;
