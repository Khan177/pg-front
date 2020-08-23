import React from 'react';
import HeaderMenu from './Menu/HeaderMenu';
import UserForm from './UserMenu/UserMenu';
import { FormUser, HeaderLogo, HeaderMenus } from './HeaderStyle';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const Header = () => {
  const useStyles = makeStyles(() => ({
    bar: {
      backgroundColor: '#FFF',
      fontSize: '14px',
      fontFamily: 'SF UI Display Medium, sans-serif',
      zIndex: '1',
      position: 'relative',
      boxShadow: '0 1px 2px 0 #92b6e8, inset 0 -3px 0 0 #e7eef8',
    },
    innerDiv: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
      margin: '0 auto',
    },
  }));
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.bar}>
      <div className={classes.innerDiv}>
        <HeaderLogo>
          <a href="/#">
            <img src={require('../../img/partners/logo.svg')} alt="" />
          </a>
        </HeaderLogo>
        <HeaderMenus>
          <HeaderMenu />
        </HeaderMenus>
        <FormUser>
          <UserForm
            name="Алексей"
            surname="Иванов"
            position="Администратор"
            avatar="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png"
          />
        </FormUser>
      </div>
    </AppBar>
  );
};

export default Header;
