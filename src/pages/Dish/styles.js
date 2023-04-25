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

  ${DEVICE.lg} {
    grid-template-rows: 9.6rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  padding-block: 10px;
  margin-inline: 56px;

  border: 1px dotted red;

  height: 100%;
  grid-area: Content;

  display: flex;
  flex-direction: column;
  gap: 24px;

  ${DEVICE.lg} {
    margin-inline: 120px;
  }

  > a:first-child {
    display: flex;
    align-items: center;
    gap: 8px;

    width: fit-content;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;

    color: #e1e1e6;

    ${DEVICE.lg} {
      font-size: 24px;
    }
  }

  .dish-wrapper {
    border: 1px dotted orange;

    /* display: flex; */
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 16px;

    text-align: center;

    .dish-preview {
      display: block;
      border: 1px dashed blue;
      max-width: 264px;
      aspect-ratio: 1 / 1;
      margin: 0 auto;
      > img {
        width: 100%;
        height: 100%;
      }
    }

    .info > h3 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 27px;
      line-height: 140%;

      color: #e1e1e6;
    }

    .info > p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;

      color: #e1e1e6;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      border: 1px dotted green;
      width: 100%;
      justify-content: center;
    }

    .order {
      display: flex;
      flex: 1;
      justify-content: center;
      gap: 16px;
    }

    ${DEVICE.lg} {
      display: flex;
      flex-direction: row;
      gap: 48px;
      height: 100%;

      text-align: left;

      .dish-preview {
        margin: unset;
        max-width: 390px;
      }

      .tags,
      .order {
        justify-content: left;
      }
    }
  }
`;
