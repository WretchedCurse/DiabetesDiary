// Components/Preferences.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import styles from '../Tools/Styles'

class Preferences extends React.Component {
  render() {
      return (
        <TouchableOpacity style={styles.main_container}>
          <View>
            <Text>Access bluetooth & notification options, pannels to chose units.. </Text>
          </View>
        </TouchableOpacity>
      )
  }
}



export default Preferences
