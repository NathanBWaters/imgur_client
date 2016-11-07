import React from 'react';
import CicadaLogo from './cicada.png'
import styles from './styles.css';
import { Navbar } from 'react-bootstrap';


function Header() {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img className={ styles.logo } src={ CicadaLogo } alt="Logo" />
          </Navbar.Brand> 
          <Navbar.Brand>
            <a href="#">React Imgur Client</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    </div>
  );
}

export default Header;
