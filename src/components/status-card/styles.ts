import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { ArrowUpRight } from 'phosphor-react-native'; 

export type TypeCardStyleProps = 'DEFAULT' | 'INSIDE' | 'OUTSIDE';

type CardStyleProps = {
  type: TypeCardStyleProps;
}

export const Container = styled(TouchableOpacity)<CardStyleProps>`
  width: 100%;
  
  ${({ theme, type }) => type === 'DEFAULT' && css`
    background-color: ${theme.COLORS.GRAY_5};
  `};

  ${({ theme, type }) => type === 'INSIDE' && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};

  ${({ theme, type }) => type === 'OUTSIDE' && css`
    background-color: ${theme.COLORS.RED_LIGHT};
  `};

  justify-content: center;
  align-items: center;

  border-radius: 8px;
  
  margin-top: 30px;
  padding: 20px 10px 20px 10px;
`;

export const ArrowGoIcon = styled(ArrowUpRight).attrs<CardStyleProps>(({ theme, type }) => ({
  color: type === 'DEFAULT' ? theme.COLORS.GRAY_1 : type === 'INSIDE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24
}))`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const TextPercent = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
`;

export const TextDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

