import { Contaner, StyledLink } from './DetailsControls.styled';

function DetailsControls() {
  return (
    <Contaner>
      <StyledLink to={'cast'}>У ролях</StyledLink>
      <StyledLink to={'reviews'}>Огляди</StyledLink>
    </Contaner>
  );
}

export default DetailsControls;
