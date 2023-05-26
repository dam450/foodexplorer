import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  display: flex;
  padding: 1.4rem;
  height: 4.8rem;
  border-radius: 0.8rem;

  &:has(input:focus-visible) {
    outline: 1px auto ${({ theme }) => theme.COLORS.DARK_100};;
  }

  > span {
    margin-right: 1em;
  }

  > input {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    border: none;
    height: 100%;
    width: 100%;

    outline: none;
    border-radius: 2px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
  }
`;
