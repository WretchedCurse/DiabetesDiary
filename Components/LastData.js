// Components/LastData.js

import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import styles from '../Tools/Styles'

class LastData extends React.Component {
  static navigationOptions = {
    title: 'Last Data',
  }
  render() {
      return (
        <TouchableOpacity style={styles.main_container}>
          <View style={styles.box}>
            <Text>We'll see later</Text>
          </View>
        </TouchableOpacity>
      )
  }
}


export default LastData
