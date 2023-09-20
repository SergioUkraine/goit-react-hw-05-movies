import Loader from 'components/Loader';
import {
  Container,
  Header,
  Controls,
  StyledLink,
  Main,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function SharedLayout() {
  return (
    <Container>
      <Header>
        <Controls>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Controls>
      </Header>

      <Suspense fallback={<Loader />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Container>
  );
}

export default SharedLayout;
