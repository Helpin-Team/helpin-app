import styled from 'styled-components/native';
import { colors } from '~/theme';

export const Container = styled.View`
  width: 100%;
  height: 36;
  padding: 0 18px;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 5;
`;

export const TextName = styled.Text`
    font-family: "SegoeUI";
    font-size: 14;
    letter-spacing: 0;
    color: ${colors.white};
`;

export const TextSubtitle = styled.Text`
    font-family: "SegoeUI";
    font-size: 8;
    letter-spacing: 0;
    color: ${colors.light};
`;

export const Config = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 40, right: 40, bottom: 40, left: 40,
  },
})`
    margin-left: auto;
`;
