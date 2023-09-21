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
            Головна
          </StyledLink>
          <StyledLink to="/movies">Фільми</StyledLink>
        </Controls>
      </Header>

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}

export default SharedLayout;
