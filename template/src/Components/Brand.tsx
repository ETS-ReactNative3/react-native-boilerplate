import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/Theme'
import { Theme } from '@/Theme/theme.type'

interface Props {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Brand = ({ height = 200, width = 200, mode = 'contain' }: Props) => {
  const { Layout, Images }: Theme = useTheme()

  return (
    <View style={{ height, width }}>
      <Image style={Layout.fullSize} source={Images.logo} resizeMode={mode} />
    </View>
  )
}

export default Brand
