import { Container, SearchInput } from './SearchBar.styled';

function SearchBar({ handleChange, setValue }) {
  return (
    <Container>
      <SearchInput
        onChange={handleChange}
        value={setValue}
        placeholder="Введіть назву фільму"
      />
    </Container>
  );
}

export default SearchBar;
