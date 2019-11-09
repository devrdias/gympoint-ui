import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';

import { signOut } from '~/store/modules/auth/auth.actions';

import { Container, Content, StyledNavLink } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleOnCLick() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <span>GYMPOINT</span>

          <div className="divider" />

          <StyledNavLink exact to="/students" activeClassName="active">
            STUDENTS
          </StyledNavLink>
          <StyledNavLink to="/plans" activeClassName="active">
            PLANS
          </StyledNavLink>
          <StyledNavLink to="/enrollments" activeClassName="active">
            ENROLLMENTS
          </StyledNavLink>
          <StyledNavLink to="/messages" activeClassName="active">
            MESSAGES
          </StyledNavLink>
        </nav>

        <aside>
          <strong>Diego</strong>
          <button type="button" onClick={handleOnCLick}>
            Sign Out
          </button>
        </aside>
      </Content>
    </Container>
  );
}
