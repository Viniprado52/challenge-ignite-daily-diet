import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { 
  ButtonContent,
  Container, 
  ImageContent, 
  SubTitle, 
  SubTitleBold, 
  SubtitleContent, 
  SubtitleContentExtra, 
  Title 
} from "./styles";

import { Button } from "@components/button";
import { StatusMeal } from "@storage/meal/meal";

import CreatedOk from '@assets/images/createdDone.png';
import CreatedNOK from '@assets/images/createdFail.png';

type RouteParams = {
  type: StatusMeal;
};

export function Created() {

  const route = useRoute();
  const { type } = route.params as RouteParams;

  const navigator = useNavigation();

  function handleGoHome(): void {
    navigator.navigate('home');
  }

  return(
    <Container>
      <Title type={type}>
        {type == 'INSIDE'
          ? 'Continue assim!'
          : 'Que pena!'
        }
      </Title>

      <SubtitleContent>
        <SubTitle>
          {type == 'INSIDE'
            ? 'Você continua'
            : 'Você'
          }
        </SubTitle>

        <SubTitleBold>
          {type == 'INSIDE'
            ? ' dentro da dieta.'
            : ' saiu da dieta'
          }
        </SubTitleBold>

        <SubTitle>
          {type == 'INSIDE'
            ? ' Muito bem!'
            : ' dessa vez, mas continue'
          }
        </SubTitle>
      </SubtitleContent>

      <SubtitleContentExtra>
        <SubTitle>
          {type == 'OUTSIDE' ? ' se esforçando e não desista!': '' }
        </SubTitle>
      </SubtitleContentExtra>
      
      
      <ImageContent>
        <Image
          source={type == 'INSIDE' ? CreatedOk : CreatedNOK}
          resizeMode="cover"
        />
      </ImageContent>

      <ButtonContent>
        <Button 
          title="Ir para a página inicial"
          onPress={handleGoHome}
        />
      </ButtonContent>
      
    </Container>
  );
}