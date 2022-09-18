import React from 'react'
import { ImageBackground } from 'react-native'
import backgroundImage from '../../assets/background-galaxy.png'
import { styles } from './styles'

interface BackgroundProps {
  children: React.ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      defaultSource={backgroundImage}
    >
      {children}
    </ImageBackground>
  )
}
