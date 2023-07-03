import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = () => {

  const ct=useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ct.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ct.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ct.isLoggedIn && (
          <li>
            <button onClick={ct.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
