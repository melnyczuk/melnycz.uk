import React from 'react';
import makeClassesClassName from './utils';

const DEFAULT_NAVBAR_CLASS = 'nav-bar';

function NavButtons(props) {
  const { buttons } = props;
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

function NavTitle(props) {
  const { id, title } = props;
  return <h1 id={id}>{ title }</h1>;
}

function NavBar(props) {
  const {
    classes = [],
    title,
    buttons = []
  } = props;
  
  const className = makeClassesClassName(classes, DEFAULT_NAVBAR_CLASS);
  
  return (
    <div className={className} >
      <NavTitle id={String(title).replace(' ', '-')} title={title} />
      { NavButtons({buttons}) }
    </div>
  );
}

export default NavBar;
