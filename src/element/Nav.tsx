import React from "react";
import styled from "styled-components";

interface NavInter {
  nav: string;
}

const Nav: React.FC = () => {
  return (
    <div>
        <Ul>
          <Li>회사소개</Li>
          <Li>서비스</Li>
          <Li>포트폴리오</Li>
          <Li>문의 &amp; 의뢰</Li>
          <Li>인재채용</Li>
        </Ul>    </div>
  );
};

const Li = styled.li`
  list-style: none;
  float: left;
  margin: 10px;
`;
const Ul = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
  line-height: 22px;
`;


export { Nav };
