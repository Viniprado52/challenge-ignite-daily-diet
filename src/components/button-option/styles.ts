import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";
import { StatusMeal } from "@storage/meal/meal";

type ButtonOptionsStyleProps = {
  type: StatusMeal;
  active: boolean;
} 

export const Container = styled(TouchableOpacity)<ButtonOptionsStyleProps>`
  flex: 1;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  margin-top: 10px;
  

  ${({ theme, active }) => !active && css`
    background-color: ${theme.COLORS.GRAY_6};
  `};

  ${({ theme, type, active }) => (type === 'INSIDE' && active) && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
    border: 1px solid;
    border-color: ${theme.COLORS.GREEN_DARK};
  `};

  ${({ theme, type, active }) => (type === 'OUTSIDE' && active) && css`
    background-color: ${theme.COLORS.RED_LIGHT};
    border: 1px solid;
    border-color: ${theme.COLORS.RED_DARK};
  `};
`;

export const StatusButton = styled.View<ButtonOptionsStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 8px;

  background-color: ${({ theme, type }) => type === "INSIDE" 
    ? theme.COLORS.GREEN_DARK 
    : theme.COLORS.RED_DARK 
  };
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-left: 10px;
`;