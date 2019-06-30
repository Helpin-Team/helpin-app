import styled from 'styled-components/native';
import { metrics } from '~/theme';

export const Container = styled.View`
  position: absolute;
  top: -40;

  height: 40;
  width: ${metrics.screenWidth};
`;
