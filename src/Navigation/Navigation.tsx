import React, { useState } from 'react';
import { Icon, Label } from 'semantic-ui-react';

import DropDown from '../Dropdown/Dropdown';

import '../css/navigation.css';

const Navigation = ({ openState, setOpenState }: any) => {
  const openDropdown = () => {
    setOpenState(true);
    if (!document.querySelector('.contents-area')?.classList.contains('blur')) {
      document.querySelector('.contents-area')?.classList.add('blur');
    }
  };

  const closeDropdown = (e: any) => {
    e.stopPropagation();
    setOpenState(false);
    if (document.querySelector('.contents-area')?.classList.contains('blur')) {
      document.querySelector('.contents-area')?.classList.remove('blur');
    }
  };

  return (
    <div className="nav-area">
      <nav className="nav-sub-area">
        <div className="nav-logo">wanted</div>
        <ul className="nav-categories">
          <div className="nav-categories-small">
            <li>홈</li>
            <li>탐색</li>
            <li>커리어 성장</li>
          </div>
          <div className="nav-categories-big">
            <li onMouseOver={openDropdown}>탐색</li>
            <li onMouseOver={closeDropdown}>커리어 성장</li>
            <li onMouseOver={closeDropdown}>직군별 연봉</li>
            <li onMouseOver={closeDropdown}>이력서</li>
            <li onMouseOver={closeDropdown}>매치업</li>
            <li onMouseOver={closeDropdown}>프리랜서</li>
            <li className="sup-parent">
              Ai 합격예측<sup className="sup">Beta</sup>
            </li>
          </div>
        </ul>
        <DropDown open={openState} close={closeDropdown} />
        <aside className="nav-asides">
          <ul>
            <li>
              <Icon name="search" />
            </li>
            <li>
              <Icon name="bell outline" />
            </li>
            <li className="nav-asides-small">
              <Icon name="align justify" />
            </li>
            <li className="nav-asides-big">
              <Icon name="user circle" />
            </li>
            <div className="vertical-line">|</div>
            <li className="nav-asides-big">
              <Label circular>기업 서비스</Label>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navigation;
