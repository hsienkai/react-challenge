let initialState = {
  favoriteList: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGES':
      return {
        ...state,
        imageURLs: action.imageURLs
      }
    case 'SEARCH_IMAGES':
      return state
    case 'FAVORITE_IMAGE':
      return Object.assign({}, state, {
        favoriteList: [
          ...state.favoriteList,
          action.imageURL
        ]
      })
    case 'UNFAVORITE_IMAGE':
      return Object.assign({}, state, {
        favoriteList: [
          ...state.favoriteList.filter(url => url != action.imageURL)
        ]
      })
    default:
      return initialState
  }
}
