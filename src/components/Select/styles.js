import styled from 'styled-components/native';

import { colors } from '../../styles';

export const Container = styled.View`
  width: 220px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${colors.dark};

  overflow: hidden;
  background: ${colors.dark};
`;

export const Input = styled.Picker`
  width: 100%;
  height: 100%;

  color: ${colors.white_30};
`;
