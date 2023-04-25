import styled from 'styled-components';

import { DEVICE } from '../../styles/device';
import bannerImgSmall from '../../assets/banner-img-S.png';
import bannerImgLarge from '../../assets/banner-img-L.png';

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

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  ${DEVICE.md} {
    grid-template-rows: 9.6rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  min-height: 100%;
  grid-area: Content;
`;

export const Banner = styled.div`
  width: 100%;

  * {
    /* border: 1px solid red; */
  }

  .banner-wrapper {
    ${DEVICE.lg} {
      /* border: 1px solid green; */

      min-width: 100%;
      margin: 172px 10px 0;
    }
  }

  .banner-content {
    width: calc(100% - 52px);
    /* width: 88%; */
    min-height: 120px;
    margin: 44px 16px 0 36px;

    padding-left: 153px;
    padding-top: 36px;
    padding-right: 16px;

    position: relative;

    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border-radius: 2.9px;

    > h3 {
      font-size: 18px;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding-bottom: 4px;
    }

    > p {
      font-family: 'Poppins';
      font-size: 12px;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding-bottom: 16px;
    }

    .banner-img {
      /* border: 1px dashed blue; */
      background: left top / cover no-repeat url(${bannerImgSmall});
      width: 191px;
      min-height: 149px;
      height: 120%;

      position: absolute;

      bottom: 0;
      left: -30px;
    }

    ${DEVICE.lg} {
      max-width: 1120px;
      min-height: 260px;
      /* margin: 44px 16px 0 36px; */
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      > h3 {
        font-size: 40px;
        width: 58%;

        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
      }

      > p {
        font-size: 16px;
        width: 58%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
      }

      .banner-content {
        margin: 0 auto;
      }

      .banner-img {
        /* background-image: url(${bannerImgLarge}); */
        background: left bottom / contain no-repeat url(${bannerImgLarge});
        max-width: 656px;
        width: 60%;
        height: 412px;
        bottom: -14px;
        left: -70px;
      }
    }
  }
`;
