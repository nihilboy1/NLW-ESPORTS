import { ColorValue, Text, View } from 'react-native'
import { THEME } from '../../../theme'

import { S } from './styles'

interface DuoInfoProps {
  label: string
  value: string
  colorValue?: ColorValue
}

export function DuoInfo({
  label,
  value,
  colorValue = THEME.COLORS.TEXT
}: DuoInfoProps) {
  return (
    <View style={S.container}>
      <Text style={S.label}>{label}</Text>
      <Text style={[S.value, { color: colorValue }]}>{value}</Text>
    </View>
  )
}
