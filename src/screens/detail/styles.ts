import { StatusMeal } from "@storage/meal/meal";
import styled, { css } from "styled-components/native";

type HeaderStyleProps = {
  type: StatusMeal;
}

export const Container = styled.View<HeaderStyleProps>`
  flex: 1;
  padding-top: 45px ;

  background-color: ${(
    { theme, type }) => type === 'INSIDE' 
    ? theme.COLORS.GREEN_LIGHT
    : theme.COLORS.RED_LIGHT
  };
`;

export const HeaderContent = styled.View`
  width: 100%;
  padding: 15px 30px 0px 30px;
`;

export const CreateContent = styled.View`
  flex: 1;
  border-radius: 30px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  margin-top: 25px;
  padding: 50px 30px 0px 30px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `};
`;

export const Description = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;

export const DateTimeLabel = styled.Text`
  margin-top: 30px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const DateTimeDecription = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;

export const TagContent = styled.View`
  margin-top: 35px;
`;

export const ButtonContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 40px;
`;

export const ModalContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  padding: 0px 30px 0px 30px;
`;

export const ModalBoxConfirm = styled.View`
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  justify-content: center;
  align-items: center;
  padding: 35px;
`;

export const TitleModalDelete = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
`;

export const ButtonModalContent = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 30px;
`;
export const ButtonCancelContent = styled.View`
  flex: 1;
`;

export const ButtonConfirmContent = styled.View`
  flex: 1;
  margin-left: 10px;
`;
