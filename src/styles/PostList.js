import styled from 'styled-components';

export const PostListContainer = styled.div`
  background-color: #f8f9fa;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-auto-rows: min-content;
  gap: 4rem;
  padding: 3rem 8rem 2rem 8rem;
  flex-grow: 1;
`;

export const SearchInputContainer = styled.div`
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  align-items: center;
  gap: 10px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1px;
  width: 450px;

  &:focus {
    border-color: #3676e8;
    box-shadow: 0 0 3px rgba(76, 175, 80, 0.2);
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`;
