import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';

export type ButtonTypes = 'TEXT'|'INCLUDE'|'EDIT'|'DELETE';

export type IconsProps = {
  type: ButtonTypes;
}

export const Container = styled(TouchableOpacity)<IconsProps>`
  width: 100%;
  height: 55px;
  margin-top: 10px;
  background-color: ${({ theme, type }) => type === 'DELETE' ?  theme.COLORS.GRAY_7 : theme.COLORS.GRAY_2};

  border-radius: 6px;
  ${({ theme, type }) => type === 'DELETE' && css`
    border: 1px solid;
    border-color: ${theme.COLORS.GRAY_1};
  `};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconButtonAdd = styled(Plus).attrs<IconsProps>(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 18
}))`
  ${({ type }) => type !== 'INCLUDE' && css`
    display: none;
  `}
  margin-right: 12px
`;

export const IconButtonEdit = styled(PencilSimpleLine).attrs<IconsProps>(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 18
}))`
  ${({ type }) => type !== 'EDIT' && css`
    display: none;
  `}
  margin-right: 12px
`;

export const IconButtonDelete = styled(Trash).attrs<IconsProps>(({ theme }) => ({
  color: theme.COLORS.GRAY_1,
  size: 18
}))`
  ${({ type }) => type !== 'DELETE' && css`
    display: none;
  `}
  margin-right: 12px
`;

export const TextButton = styled.Text<IconsProps>`
  color: ${({ theme, type }) => type === 'DELETE' 
    ? theme.COLORS.GRAY_1 
    : theme.COLORS.WHITE
  };
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;