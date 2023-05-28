import styled from 'styled-components';

export const Container = styled.div`
  margin: 12px;
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    background: none;
    border: none;
  }
  > input {
    margin-inline: 6px;
    width: 20px;
    text-align: center;
    justify-content: center;

    background-color: transparent;
    border: none;
    color: #fff;
  }
`;
