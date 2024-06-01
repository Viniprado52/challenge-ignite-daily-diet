import styled, { css } from "styled-components/native";

export type CardType = "SUCCESS" | "FAIL" | "DEFAULT";

type CardTypeStyle = {
  type: CardType
}

export const Container = styled.View<CardTypeStyle>`
  width: 100%;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  min-height: 105px;
  padding: 15px;
  margin-top: 15px;

  ${({ theme, type }) => type === 'DEFAULT' && css`
    background-color: ${theme.COLORS.GRAY_6};
  `};

  ${({ theme, type }) => type === 'SUCCESS' && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};

  ${({ theme, type }) => type === 'FAIL' && css`
    background-color: ${theme.COLORS.RED_LIGHT};
  `};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  text-align: center;
`;