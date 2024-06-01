import { StatusMeal } from "@storage/meal/meal";
import styled, { css } from "styled-components/native";

type StyleTagProps = {
  type: StatusMeal;
}

export const Container = styled.View`
  max-width: 150px;
  flex-direction: row;
  padding: 10px 15px 10px 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 20px;
  
  justify-content: center;
  align-items: center;
`;

export const StatusTag = styled.View<StyleTagProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${(
    { theme, type }) => type === 'INSIDE' 
    ? theme.COLORS.GREEN_DARK
    : theme.COLORS.RED_DARK
  };
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  margin-left: 10px
`;