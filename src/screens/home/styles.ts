import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 20px 30px 0px 30px;
`;

export const TextMealsInclude = styled.Text`
  margin-top: 35px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const ContainerSectionList = styled.View`
  width: 100%;
  padding-top: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const TextSectionList = styled.Text`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

