import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0d1d25;

  display: flex;
  /* flex-direction: row; */
  /* justify-content: center; */
  /* align-items: center; */
  padding: 1.4rem;
  /* gap: 14px; */

  height: 4.8rem;

  border-radius: 0.8rem;

  &:has(input:focus-visible) {
    outline: 1px auto rgb(16, 16, 16);
  }

  > span {
    margin-right: 1em;
  }

  > input {
    background-color: #0d1d25;
    color: #7c7c8a;

    outline: none;

    border: none;
    height: 100%;
    width: 100%;

    border-radius: 2px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
  }
`;
