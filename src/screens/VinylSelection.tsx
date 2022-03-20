import { View, Text } from 'react-native'
import React, { FC } from 'react'

import { useRequest } from '../hooks/useRequest'

const VinylSelection: FC = () => {
  const { response: gist } = useRequest(
    'https://api.github.com/gists/3648d4454d0c68d836fac03386c17be1'
  )

  return (
    <View>
      <Text>VinylSelection</Text>
    </View>
  )
}

export default VinylSelection
