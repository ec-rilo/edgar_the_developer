import styled from 'styled-components';

const StyledSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 60px;

  background: transparent;
  border: 1px solid var(--clr-gainsboro);
  color: var(--clr-gainsboro);
  font-size: 1rem;
  cursor: pointer;

  transition: .2s all;

  &:hover {
    background-color: var(--clr-gainsboro);
    color: var(--clr-onyx);
  }
`;

export default StyledSubmitBtn;
