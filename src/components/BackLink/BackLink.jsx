import { LinkButton, LinkIcon, LinkText } from './BackLink.styled';

function BackLink({ backRef }) {
  return (
    <LinkButton to={backRef}>
      <LinkIcon />
      <LinkText>Back</LinkText>
    </LinkButton>
  );
}

export default BackLink;
