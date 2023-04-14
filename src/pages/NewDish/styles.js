import styled from 'styled-components';
import { DEVICE } from '../../styles/device';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'Content'
    'footer';
`;

export const Content = styled.div`
  margin-top: 10px;

  height: 100%;
  grid-area: Content;

  padding: 10px 32px 52px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  * ::file-selector-button {
    display: none;
  }
  * ::-webkit-file-upload-button {
    display: none;
  }

  > a:first-child {
    display: flex;
    align-items: center;
    gap: 8px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16.5459px;
    line-height: 140%;
    /* or 23px */

    /* Light/Light 300 */

    color: #e1e1e6;
  }

  > h3 {
    /* Poppins/400-medium */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    /* identical to box height, or 45px */

    /* Light/Light 300 */

    color: #e1e1e6;
  }

  .input-wrapper {
    label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      /* identical to box height, or 16px */

      /* Light/Light 400 */

      color: #c4c4cc;

      display: inline-block;
      margin-bottom: 16px;
    }

    textarea {
      display: block;
      width: 100%;
    }
  }
`;
