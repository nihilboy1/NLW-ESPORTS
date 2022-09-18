export interface GameParams {
  id: string
  bannerUrl: string
  title: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: {
        id: string
        bannerUrl: string
        title: string
      }
      game: GameParams
    }
  }
}
