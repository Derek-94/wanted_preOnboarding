import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

import '../css/navigation.css';

const Navigation = () => {
  return (
    <div className="nav-area">
      <nav className="nav-sub-area">
        <div className="nav-logo">wanted</div>
        <ul className="nav-categories">
          <li onMouseOver={() => console.log('!!')}>탐색</li>
          <li>커리어 성장</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li>매치업</li>
          <li>프리랜서</li>
          <li className="sup-parent">
            Ai 합격예측<sup className="sup">Beta</sup>
          </li>
        </ul>
        <aside className="nav-asides">
          <ul>
            <li>
              <Icon name="search" />
            </li>
            <li>
              <Icon name="bell outline" />
            </li>
            <li>
              <Icon name="user circle" />
            </li>
            <div className="vertical-line">|</div>
            <li>
              <Label circular>기업 서비스</Label>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navigation;
