import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { THEME } from '../../theme'

import { S } from './styles'

export interface GameCardProps {
  id: string
  title: string
  _count: {
    ads: number
  }
  bannerUrl: string
}

interface GameCardDataProps extends TouchableOpacityProps {
  data: GameCardProps
}

export function GameCard({ data, ...rest }: GameCardDataProps) {
  return (
    <TouchableOpacity style={S.container} {...rest}>
      <ImageBackground source={{ uri: data.bannerUrl }} style={S.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={S.footer}>
          <Text style={S.name}>{data.title}</Text>
          <Text style={S.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
