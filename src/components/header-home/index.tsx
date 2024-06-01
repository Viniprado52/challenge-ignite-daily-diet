import { Image } from "react-native";
import { Container } from "./styles";

import LogoPath from '@assets/images/logo.png';
import ElipsePath from '@assets/images/Ellipse.png';

export function HeaderHome() {
  return(
    <Container>
      <Image
        source={LogoPath} 
        width={82}
        height={37}
      />

      <Image
        source={ElipsePath} 
        width={40}
        height={40}
      />  
    </Container>
  );
}