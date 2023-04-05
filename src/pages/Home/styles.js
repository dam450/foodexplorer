import styled from 'styled-components';
import { MEDIA } from '../../styles/brakepoints';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  ${MEDIA.DESKTOP} {
    grid-template-rows: 9.6rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  height: 100%;
  grid-area: content;
`;
