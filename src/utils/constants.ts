import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const screenDimensions = {
  windowWidth,
  windowHeight,
}

export const gitHubGistsEndpoint =
  'https://api.github.com/gists/3648d4454d0c68d836fac03386c17be1'

export const spotifyEndpoint = 'https://api.spotify.com/v1/'

export const spotifyAuthToken =
  'Bearer BQARctldrnUPU_2ZRNZ_ntAB4i6q0Ubhx9b6qCQKXPOqBgq5cWIa6GU43FMNhWUeLcvnZVk07QOCX-AN9O9CBO6YsOhklgU1kiNisQOCrs64mBJUwqaYZS_OycnpK7HZXJg5GmOyZdUatswhj4eSgwyQ1BJkxXbqt6wM6wiWPmct'
