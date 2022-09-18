import React from 'react'
import { Text, View, ViewProps } from 'react-native'

import { S } from './styles'

interface HeaderProps extends ViewProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle, ...rest }: HeaderProps) {
  return (
    <View style={S.container} {...rest}>
      <Text style={S.title}>{title}</Text>
      <Text style={S.subtitle}>
        {subtitle}
      </Text>
    </View>
  )
}
