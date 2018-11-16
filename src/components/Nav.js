import React, { PureComponent } from 'react';
import '../style/App.css';

class Nav extends PureComponent {
  render() {
    const { 
      className,
      buttons = []
    } = this.props;

    return (
      <Nav className={className} >
        {
          buttons.map((button, i) => {
            return(
              <div key={i} className="nav-button" id={button} >
                <a href={`#${button}`} />
              </div> 
            );
          })
        }
      </Nav>
    );
  }
}

export default Nav;
