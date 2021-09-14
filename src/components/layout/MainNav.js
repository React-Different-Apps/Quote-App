import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./MainNavigation.module.css"
const MainNav = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Great QUotes</div>
            <nav className={classes.nav}>
              <ul>
                  <li>
                      <NavLink to="/quotes" activeClassName={classes.active}>All Qoutes</NavLink>
                  </li>
                  <li>
                      <NavLink to="/add-new-quote" activeClassName={classes.active}>New Quote</NavLink>
                  </li>
              </ul>
            </nav>
        </header>
    )
}

export default MainNav
