import React from 'react'

import {StyleSheet, View, Button, TextInput} from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
        <Button title="Rechercher" onPress={() => {}} />
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    textinput:{
      marginLeft : 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      marginBottom: 20
    },
    view :{
      marginTop: 30
    },
  })
export default Search

