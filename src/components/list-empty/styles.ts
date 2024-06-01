import styled from "styled-components/native";

import { ForkKnife } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconFood = styled(ForkKnife).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_3,
  size: 50
}))``;

export const TextEmpty = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

