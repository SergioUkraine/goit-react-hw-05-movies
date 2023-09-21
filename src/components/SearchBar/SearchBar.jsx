import React from 'react';
import PropTypes from 'prop-types';
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

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  setValue: PropTypes.string.isRequired,
};

export default SearchBar;
