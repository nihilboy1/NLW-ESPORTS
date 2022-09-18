import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GameParams } from '../../@types/navigation'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import { Header } from '../../components/Header'
import { THEME } from '../../theme'
import { S } from './styles'

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams

  useEffect(() => {
    fetch(`http://10.0.0.227:3333/games/${game.id}/ads`)
      .then(res => res.json())
      .then(data => setDuos(data))
  }, [])

  function goBackScreen() {
    navigation.goBack()
  }
  return (
    <Background>
      <SafeAreaView style={S.container}>
        <View style={S.header}>
          <TouchableOpacity onPress={goBackScreen}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={S.logo} resizeMode="cover" />
          <View style={S.right} />
        </View>
        <Image source={{ uri: game.bannerUrl }} style={S.cover} />
        <Header title={game.title} subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard onConnect={() => {}} data={item} />
          )}
          horizontal
          style={S.containerList}
          contentContainerStyle={[
            duos.length > 0 ? S.contentContainer : S.emptyComponent
          ]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={S.emptyListAlert}>
              Nada por aqui... Que tal criar um anúncio?
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  )
}
