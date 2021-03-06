import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const links = [
  {
    to: '/',
    text: 'Homepage'
  },
  {
    to: '/register',
    text: 'Register',
  },
  {
    to: '/login',
    text: 'Admin',
  }
];

const isCurrent = (to, current) => {
  if (to === '/' && current === to) {
    return true;
  } else if (to !== '/' && current.includes(to)) {
    return true;
  }

  return false;
};

const HeaderLink = ({ to, text, current }) => (
  <li className={isCurrent(to, current) ? 'current' : ''}>
    <Link to={to}>{text}</Link>
  </li>
);

const Header = styled.header`
  background-color: darkgreen;
  height: auto;
  padding: 20px;
  color: white;
`;

const Title = styled.div`
  margin-top: 0px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const Links = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;

  li {
    a {
      padding: 10px;
      color: lightGray;
      text-decoration: none;
      transition: all 1s;

      &:hover {
        color: white;
      }

      .current {
        color: white;
        font-weight: bold;
      }
    }
  }
`

export default ({ isAuthenticated, current }) => (
  <Header>
    <Title>DBS Marathon Website</Title>
    <Links>
      {links.map((link, index) => {
        const TheLink = <HeaderLink key={index} current={current} {...link} />;

        if (link.hasOwnProperty('auth')) {
          if (link.auth && isAuthenticated) {
            return TheLink;
          } else if (!link.auth && !isAuthenticated) {
            return TheLink;
          }

          return null;
        }

        return TheLink;
      })}
    </Links>
  </Header>
);
