import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans';

import theme from 'src/theme';
import { Routes } from 'src/routes';

import { Loading } from '@components/loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [fonstLoaded] = useFonts({NunitoSans_400Regular,NunitoSans_700Bold});

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ThemeProvider theme={theme}>
        { fonstLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  );
}

