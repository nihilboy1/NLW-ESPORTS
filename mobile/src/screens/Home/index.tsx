import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background'
import { GameCard, GameCardProps } from '../../components/Gamecard'
import { Header } from '../../components/Header'

import { S } from './styles'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>()
  const navigation = useNavigation()

  function switchToGameScreen({ bannerUrl, id, title }: GameCardProps) {
    navigation.navigate('game', { bannerUrl, id, title })
  }

  useEffect(() => {
    fetch('http://10.0.0.227:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={S.container}>
        <Image source={logoImg} style={S.logo} />
        <Header
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              onPress={() => {
                switchToGameScreen(item)
              }}
              data={item}
            />
          )}
        />
      </SafeAreaView>
    </Background>
  )
}
