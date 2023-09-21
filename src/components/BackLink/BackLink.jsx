import { LinkButton, LinkIcon, LinkText } from './BackLink.styled';
import PropTypes from 'prop-types';

function BackLink({ backRef }) {
  return (
    <LinkButton to={backRef}>
      <LinkIcon />
      <LinkText>Назад</LinkText>
    </LinkButton>
  );
}

BackLink.propTypes = {
  backRef: PropTypes.object.isRequired,
};

export default BackLink;
