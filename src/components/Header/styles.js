import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.5);

  nav {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      margin-left: 30px;
    }

    span {
      margin-left: 12.6px;
      font-family: Roboto;
      font-size: 18px;
      font-weight: bold;
      color: #ee4d64;
    }

    .divider {
      margin: 0 30px;
      width: 1px;
      height: 32px;
      background-color: #ddd;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;

    strong {
      font-family: Roboto;
      font-size: 14px;
      font-weight: bold;
      color: #666;
      padding: 2px 0;
    }

    button {
      border: 0;
      background: none;
      font-family: Roboto;
      font-size: 14px;
      color: #de3b3b;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  float: left;
  text-align: center;
  margin-right: 20px;
  text-decoration: none;
  font-size: 15px;
  overflow: hidden;
  outline: none;
  color: #999;
  transition: all 0.2s cubic-bezier(0.21, -0.67, 0.76, 1.63);

  > {
    color: #444;
  }
  &:hover {
    color: #444;
    height: 20px;
    font-size: 17px;
  }

  &.active {
    color: #444;
  }
`;
