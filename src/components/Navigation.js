import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink
      style={styles.link}
      activeStyle={styles.activeLink}
      exact
      to={routes.home}
    >
      Home
    </NavLink>

    <NavLink
      style={styles.link}
      activeStyle={styles.activeLink}
      to={routes.shows}
    >
      Shows
    </NavLink>
    <NavLink
      style={styles.link}
      activeStyle={styles.activeLink}
      to={routes.blog}
    >
      Blog
    </NavLink>
    <NavLink
      style={styles.link}
      activeStyle={styles.activeLink}
      to={routes.profile}
    >
      Profile
    </NavLink>

    <NavLink
      style={styles.link}
      activeStyle={styles.activeLink}
      to={routes.patterns}
    >
      Patterns
    </NavLink>

    <NavLink
      style={styles.link}
      activeStyle={styles.activeLink}
      to={routes.counter}
    >
      Counter
    </NavLink>
    <NavLink
      style={styles.link}
      activeStyle={styles.activeLink}
      to={routes.todos}
    >
      Todos
    </NavLink>
  </nav>
);

export default Navigation;
