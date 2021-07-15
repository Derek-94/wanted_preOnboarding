import React from 'react';
import { Icon } from 'semantic-ui-react';

import '../css/dropdown.css';

const DropDown = ({ open, close }: any) => {
  return (
    <div className={open ? 'openDropDown modal' : 'modal'}>
      {open ? (
        <section className="dropdown-area">
          <div>
            <h2>
              영업
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h3>기업영업</h3>
            <h3>외부영업</h3>
            <h3>영업 관리자</h3>
            <h3>기술영업</h3>
            <h3>주요고객사 담당자</h3>
            <h3>솔루션 컨설턴트</h3>
            <h3>해외영업</h3>
            <h3>
              더보기
              <span>
                <Icon name="angle right" />
              </span>
            </h3>
          </div>
          <div>
            <h2>
              미디어
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h3>콘텐츠 크리에이터</h3>
            <h3>PD</h3>
            <h3>영상 편집가</h3>
            <h3>에디터</h3>
            <h3>비디오 제작</h3>
            <h3>작가</h3>
            <h3>출판 기획자</h3>
            <h3>
              더보기
              <span>
                <Icon name="angle right" />
              </span>
            </h3>
          </div>
          <div>
            <h2>
              인사
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h3>인사담당</h3>
            <h3>리크루터</h3>
            <h3>조직문화</h3>
            <h3>평가▪보상</h3>
            <h3>헤드헌터</h3>
            <h3>HRBP</h3>
            <h3>HRD</h3>
            <h3>
              더보기
              <span>
                <Icon name="angle right" />
              </span>
            </h3>
          </div>
          <div>
            <h2>
              게임 제작
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h3>게임 기획자</h3>
            <h3>게임 그래픽 디자이너</h3>
            <h3>모바일 게임 개발자</h3>
            <h3>게임 클라이언트 개발자</h3>
            <h3>게임 아티스트</h3>
            <h3>게임 서버 개발자</h3>
            <h3>유니티 개발자</h3>
            <h3>
              더보기
              <span>
                <Icon name="angle right" />
              </span>
            </h3>
          </div>
          <div>
            <h2>
              엔지니어링 ▪ 설계
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h3>전자 엔지니어</h3>
            <h3>기계 엔지니어</h3>
            <h3>전기기계 공학자</h3>
            <h3>전기 엔지니어</h3>
            <h3>로봇▪자동화</h3>
            <h3>QA 엔지니어</h3>
            <h3>제품 엔지니어</h3>
            <h3>
              더보기
              <span>
                <Icon name="angle right" />
              </span>
            </h3>
          </div>
          <div>
            <h2>
              엔지니어링 ▪ 설계
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h2>
              물류 ▪ 무역
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h2>
              제조 ▪ 생산
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h2>
              의료 ▪ 제작 ▪ 바이오
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h2>
              교육
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h2>
              법률 ▪ 법진행기관
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h2>
              식 ▪ 음료
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h2>
              건설 ▪ 시설
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
            <h2>
              공공 ▪ 복지
              <span>
                <Icon name="angle right" />
              </span>
            </h2>
          </div>
        </section>
      ) : (
        ``
      )}
    </div>
  );
};

export default DropDown;
