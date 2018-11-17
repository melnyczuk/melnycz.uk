import React from 'react';

function generateButtons(buttons) {
  return buttons.map((button, i) => {
    return (
      <div key={i} className="nav-button" id={button} >
        <a href={button}>
          {button}
        </a>
      </div>
    );
  })
}

function NavBar(props){
  const {
    className = 'nav-bar',
    title,
    buttons = []
  } = props;

  return (
    <div className={className} id={title} >
      { title }
      { generateButtons(buttons) }
    </div>
  );
}

export default NavBar;
