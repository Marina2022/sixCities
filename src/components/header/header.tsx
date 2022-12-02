import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {AuthStatus} from "../../consts";
import React from "react";
import {selectAuthStatus, selectUserData, signOut} from "../../store/reducers/userReducer";

function Header(): JSX.Element {

  const authStatus = useAppSelector(selectAuthStatus)
  const userData = useAppSelector(selectUserData)

  const dispatch = useAppDispatch()

  const onSignOut  = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(signOut())
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={'/'} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={"/favorites"} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    <img src={userData.avatarUrl} alt={userData.name}/>

                  </div>
                  {authStatus === AuthStatus.Auth ?
                    <span className="header__user-name user__name">{userData.email}</span> : ''
                  }
                </Link>
              </li>
              <li className="header__nav-item">
                {
                  authStatus === AuthStatus.Auth ?
                  <a className="header__nav-link" href="#" onClick={onSignOut}>
                    <span className="header__signout">Sign out</span>
                  </a> :
                    <Link to={'/login'} className="header__nav-link" >
                      <span className="header__login">Sign in</span>
                    </Link>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
