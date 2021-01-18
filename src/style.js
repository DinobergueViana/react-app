import styled from 'styled-components';

export const BuyButton = styled.button `
  width: 100px;
  height: 30px;
  background-color: ${props => props.isPrimary ? "#429ef5": "#fff"};
  color: ${props => props.isPrimary ? "#fff" : "#429ef5"};
  border: 1px solid #429ef5;
  transition: 1s;
  &:hover {
    filter: brightness(80%);
  }
`