import styled from 'styled-components';
import { MEDIA } from '../../styles/brakepoints';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  min-height: 7.7rem;
  padding-inline: 2.7rem;

  padding-top: 2.5rem;

  /* border: 1px dotted red; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  button {
    border: 0;
    border-radius: 2px;
    background: none;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #ffffff;
    font-family: 'Roboto';
    font-size: 2.1rem;
    gap: 1.6rem;

    img {
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }
  }

  .logo-wrapper {
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    column-gap: 0.8rem;

    span {
      font-size: 12px;
      line-height: 160%;
      color: #82f3ff;
    }
  }

  .logo {
    /* border: 1px solid green; */
    display: flex;
    gap: 0.8rem;
    align-items: center;

    img {
      height: 2.4rem;
      aspect-ratio: 1 / 1;
    }

    h1 {
      font-family: 'Roboto';
      font-size: 2.1rem;
      color: #ffffff;
    }
  }

  nav {
    /* border: 1px solid gold; */

    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    padding: 56px 28px;

    background: linear-gradient(#001119 20%, #000a0f 20%);

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    opacity: 0;
    transform: translateY(-100vh);

    transition: all 300ms;

    .input {
      margin-block: 6.8rem;
      width: 100%;
    }
  }

  nav.mobile-menu {
    opacity: 1;
    transform: translateY(0);
  }
  #exit {
    display: none;
  }

  ${MEDIA.DESKTOP} {
    padding-inline: clamp(10px, 9vw, 12.3rem);
    padding-top: 0;
    gap: 1rem;

    button.menu {
      display: none;
    }

    .logo-wrapper {
      flex-direction: column;
    }
    .logo {
      img {
        height: 3rem;
      }

      h1 {
        font-size: 2.4rem;
      }
    }
    nav {
      background: initial;
      position: initial;
      top: initial;
      left: initial;
      width: initial;
      height: initial;
      padding: initial;
      opacity: initial;
      transform: initial;

      flex-direction: row;
      align-items: center;

      .input {
        margin: initial;
      }

      button > span {
        display: none;
      }
    }

    .bar {
      border: 1px solid red;
      width: 68%;
      display: grid;
      /* grid: auto-flow dense / auto auto 40px; */

      grid-template-columns: auto auto 40px;
      grid-template-areas: 'search button exit';

      gap: 3rem;

      .input {
        grid-area: search;
        width: 100%;
      }
      #exit {
        display: initial;
        grid-area: exit;
      }
    }
  }
`;
