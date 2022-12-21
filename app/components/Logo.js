import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/note_icon.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    paddingLeft: 80,
    borderRadius: 10,
    // color:"#3af36e",
  },
})
