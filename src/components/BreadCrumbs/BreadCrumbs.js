import React from 'react';
import { Breadscrumbs } from '../ComponentsStyles';
import { Link } from 'react-router-dom';
import breadcrumbs from '../../img/outdoor_furniture/bx-breadcrumbs.svg';
import '../../containers/Base/Partners/Style/style.css';

export default function BreadCrumbs({ links }) {
  return (
    <Breadscrumbs>
      <Link to="/">
        <img src={breadcrumbs} alt="" />
      </Link>
      {links.map((link, i) => {
        return (
          <Link style={{ color: '#8AA1C1', padding: '0 2px' }} to={`/${link.id}`} key={i}>
            {link.value} {i === 2 ? null : <span>/</span>}
          </Link>
        );
      })}
    </Breadscrumbs>
  );
}
