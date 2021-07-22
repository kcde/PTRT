import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={classes.logo}>
        <p>prtrts</p>
      </div>
      <nav className={classes.nav}>
        <NavLink
          to="/"
          exact={true}
          className={classes['nav-link']}
          activeClassName={classes.selected}
        >
          All
        </NavLink>
        <NavLink to="/bw" className={classes['nav-link']} activeClassName={classes.selected}>
          b/w
        </NavLink>
        <NavLink to="/about" className={classes['nav-link']} activeClassName={classes.selected}>
          about
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
