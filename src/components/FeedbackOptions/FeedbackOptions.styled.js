import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Button = styled.button`
  width: 80px;
  cursor: pointer;
  transition: background-color 1s;
  font-weight: ${p => p.theme.fontWeights.bold};
  :hover {
    background-color: yellow;
    border-radius: 5px;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px lightskyblue;
  }
  :active {
    background-color: #333;
    border-color: #333;
    color: #eee;
  }
`;

export const Request = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: orange;
`;
