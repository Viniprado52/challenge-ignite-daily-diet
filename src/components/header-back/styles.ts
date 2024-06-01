import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { ArrowLeft } from 'phosphor-react-native';
import { TypeCardStyleProps } from "@components/status-card/styles";

type HeaderStatusProps = {
  type: TypeCardStyleProps;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const IconBackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 0px;
  top: 0px;

  justify-content: center;
  align-items: center;

  padding: 8px;
`;

export const Title = styled.Text`
  padding: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const IconBack = styled(ArrowLeft).attrs<HeaderStatusProps>(({ theme, type}) => ({
  color: type === 'DEFAULT' ? theme.COLORS.GRAY_1 :  type === 'OUTSIDE' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
  size: 24
}))``;

