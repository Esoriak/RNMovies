import React from 'react'
import Movies from '../Helpers/MoviesData.js'

import { FlatList, Text, StyleSheet, View, Button, TextInput} from 'react-native'



class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
        <Button title="Rechercher" onPress={() => {}} />

        <FlatList
          data = {Movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem= {({item}) => <Text>{item.title}</Text>}
        />
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
    main_container :{
      marginTop: 30,
      flex: 1
    },
  })


export default Search;

