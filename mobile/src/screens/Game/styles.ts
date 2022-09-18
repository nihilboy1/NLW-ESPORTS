import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between'
  },
  logo: {
    width: 72,
    height: 40
  },

  right: {
    width: 20,
    height: 20
  },
  cover: {
    width: 411,
    height: 160,
    borderRadius: 8,
    marginTop: 32
  },
  containerList: {
    width: '100%'
  },
  contentContainer: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },
  emptyListAlert: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },

  emptyComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
