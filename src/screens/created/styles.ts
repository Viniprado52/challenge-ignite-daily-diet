import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

type StyleType = {
  type: string;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text<StyleType>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;

  ${({ theme, type }) => type === 'INSIDE' && css`
    color: ${theme.COLORS.GREEN_DARK};
  `};

  ${({ theme, type }) => type === 'OUTSIDE' && css`
    color: ${theme.COLORS.RED_DARK};
  `};

  margin-bottom: 10px;
`;

export const SubtitleContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SubtitleContentExtra = styled.View`
  flex-direction: row;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  `};
  text-align: center;
`;

export const SubTitleBold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  `};
  text-align: center;
`;

export const ImageContent = styled.View`
  width: 244px;
  height: 288px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContent = styled.View`
  width: 100%;
  padding: 30px 50px 0px 50px;
`;

