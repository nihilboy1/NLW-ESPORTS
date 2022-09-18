import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts
} from '@expo-google-fonts/inter'
import { StatusBar } from 'react-native'
import { Background } from './src/components/Background'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Routes /> : <Loading/>}
    </Background>
  )
}
