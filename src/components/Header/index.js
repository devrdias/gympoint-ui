import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.svg';

import { signOut } from '~/store/modules/auth/auth.actions';

import { Container, StyledNavLink, Divider } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleOnCLick() {
    dispatch(signOut());
  }

  return (
    <Container>
      <nav>
        <img src={logo} alt="GymPoint" />
        <span>GYMPOINT</span>

        <Divider />

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
      <div>
        <Divider />

        <aside>
          <strong>{profile.name}</strong>
          <button type="button" onClick={handleOnCLick}>
            Sign Out
          </button>
        </aside>
      </div>
    </Container>
  );
}
