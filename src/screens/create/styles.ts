import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  padding-top: 45px ;
`;

export const HeaderContent = styled.View`
  width: 100%;
  padding: 20px 30px 0px 30px;
`;

export const CreateContent = styled.View`
  flex: 1;
  border-radius: 30px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  margin-top: 30px;
  padding: 20px 30px 0px 30px;
`;

export const InputTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  margin-top: 25px;
`;

export const InputField = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};

  border-radius: 6px;
  margin-top: 8px;
  padding: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const InputFieldDecription = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 4,
  textAlignVertical: 'top'
})`
  width: 100%;
  min-height: 120px;
  max-height: 120px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};

  border-radius: 6px;
  margin-top: 8px;
  padding: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const DateTimeContent = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const TimeContent = styled.View`
  flex: 1;
`;

export const HourContent = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const ButtonOptionContent = styled.View`
  width: 100%;
  flex-direction: row;
`;
export const SpaceButton = styled.View`
  width: 15px;
`;

export const ButtonAddContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 40px;
  width: 100%;
  bottom: 10px;
`;