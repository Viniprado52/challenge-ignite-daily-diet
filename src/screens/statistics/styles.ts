import { TypeCardStyleProps } from "@components/status-card/styles";
import styled, { css } from "styled-components/native";

type StatisticsStatusProps = {
  typeStatus: TypeCardStyleProps;
}

export const Container = styled.View<StatisticsStatusProps>`
  flex: 1;
  padding-top: 45px;

  ${({ theme, typeStatus }) => typeStatus === 'DEFAULT' && css`
    background-color: ${theme.COLORS.GRAY_5};
  `};

  ${({ theme, typeStatus }) => typeStatus === 'INSIDE' && css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};

  ${({ theme, typeStatus }) => typeStatus === 'OUTSIDE' && css`
    background-color: ${theme.COLORS.RED_LIGHT};
  `};
`;

export const HeaderContent = styled.View`
  width: 100%;
  padding: 20px 30px 0px 30px;
`;

export const StatusInfoHeaderContent = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
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

export const StatisticsContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  margin-top: 35px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  align-items: center;
`;

export const TitleStatisticsBody = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  margin-top: 30px;
`;

export const StatisticsCardContent = styled.View`
  width: 100%;
  padding: 0px 30px 0px 30px;
  margin: 15px 0px 20px 0px;
`;

export const CardContentRow = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0px 30px 0px 30px;
`;

export const CardContentRowSuccess = styled.View`
  flex: 1;
  min-height: 200px;
`;

export const CardContentRowFail = styled.View`
  flex: 1;
  margin-left: 15px;
`;



