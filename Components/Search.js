import React from 'react'
import MovieItem from './MovieItem'

import { getFilmsFromApiWithSearchedText } from '../API/TMBDApi'

import { FlatList, Text, StyleSheet, View, Button, TextInput} from 'react-native'



class Search extends React.Component {

  constructor(props) {
    super(props)
    this._films = []
  }

  _loadMovies () {
      getFilmsFromApiWithSearchedText("star").then(data=> {
        console.log("trouvé", data)
        this._films = data.results
        this.forceUpdate()
      })
  }

  render() {


    console.log("search", this.props)


    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
        <Button title="Rechercher" onPress={() => {this._loadMovies()}} />

        <FlatList
          data = {this._films}
          keyExtractor={(item) => item.id.toString()}
          renderItem= {({item}) => <MovieItem film={item}/>}
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

