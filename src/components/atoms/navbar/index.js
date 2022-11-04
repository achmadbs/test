import React from 'react';
import { NavbarWraper } from './style';
import Arrow from '../../../assets/arrow-back.svg';

const Navbar = () => {
  return (
    <NavbarWraper>
      <div>
        <img src={Arrow} alt="arrow" />
        <hr />
        <p>Event</p>
      </div>
    </NavbarWraper>
  );
};

export default Navbar;
