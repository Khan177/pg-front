import React from 'react';
import { BaseHoverBlockLink, HeaderMenuLink, DropdownMenu, DropdownContent } from '../HeaderStyle';

const HeaderMenu = () => {
  return (
    <>
      <HeaderMenuLink to={'/'}>Продажи</HeaderMenuLink>
      <HeaderMenuLink to={'/installations/design'}>Монтажи</HeaderMenuLink>
      <DropdownMenu>
        <HeaderMenuLink to={'/base'}>Базы</HeaderMenuLink>
        <DropdownContent>
          <BaseHoverBlockLink to="/base/outdoor_furniture">Уличная мебель</BaseHoverBlockLink>
          <BaseHoverBlockLink to="/base/construction">Конструкции</BaseHoverBlockLink>
          <BaseHoverBlockLink to="/base/partners">Контрагенты</BaseHoverBlockLink>
          <BaseHoverBlockLink to="/base/locations">Список местоположений</BaseHoverBlockLink>
        </DropdownContent>
      </DropdownMenu>
      <HeaderMenuLink to={'/'}>Отчеты</HeaderMenuLink>
      <HeaderMenuLink to={'/'}>Администрация</HeaderMenuLink>
    </>
  );
};

export default HeaderMenu;
