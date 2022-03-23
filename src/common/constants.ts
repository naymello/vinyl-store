import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const screenDimensions = {
  windowWidth,
  windowHeight,
}

export const gitHubGistsEndpoint =
  'https://api.github.com/gists/3648d4454d0c68d836fac03386c17be1'
