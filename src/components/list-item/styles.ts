import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { StatusMeal } from "@storage/meal/meal";

type StatusProps = {
  type: StatusMeal;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  border: 1px solid;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};

  flex-direction: row;
  align-items: center;
  
  padding: 15px;
  margin-bottom: 10px;
`;

export const InformationContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const TextTime = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Divider = styled.View`
  width: 1px;
  height: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin: 0px 10px 0px 10px;
`;

export const TextDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const StatusIndicator = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 10px;

  background-color: ${(
    { theme, type }) => type === 'OUTSIDE'
    ? theme.COLORS.RED_MID
    : theme.COLORS.GREEN_MID
  };
`;