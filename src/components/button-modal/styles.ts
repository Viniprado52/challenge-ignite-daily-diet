import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

export type ButtonModalType = "DEFAULT" | "OUTLINED";

type ButtonModalStyleProps = {
  type: ButtonModalType;
}

export const Container = styled(TouchableOpacity)<ButtonModalStyleProps>`
  width: 100%;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  ${({ theme, type }) => type === 'DEFAULT' && css`
    background-color: ${theme.COLORS.GRAY_2};
  `};

  ${({ theme, type }) => type === 'OUTLINED' && css`
    background-color: ${theme.COLORS.GRAY_7};
    border: 1px solid;
    border-color: ${theme.COLORS.GRAY_1};
  `};
`;

export const TitleButton = styled.Text<ButtonModalStyleProps>`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};

  ${({ theme, type }) => type === 'DEFAULT' && css`
    color: ${theme.COLORS.WHITE};
  `};

  ${({ theme, type }) => type === 'OUTLINED' && css`
    color: ${theme.COLORS.GRAY_1};
  `};
`;