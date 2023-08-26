import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import AddFilm from './AddFilm';
import SearchFilm from './SearchFilm';

export default function HomeScreen({navigation}) {
  const movies = [
    {id: 1, title: 'Pitch Perfect 1', cover: require('../comingsoon.jpeg')},
    {id: 2, title: 'Pitch Perfect 2', cover: require('../comingsoon.jpeg')},
    {id: 3, title: 'Pitch Perfect 3', cover: require('../comingsoon.jpeg')},
    {id: 4, title: 'Predator', cover: require('../comingsoon.jpeg')},
    {id: 5, title: 'Predator 3', cover: require('../comingsoon.jpeg')},
    // ...other movies
  ];

  const findFilm = searchQuery => {
    console.log(searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AddFilm navigation={navigation} />
        <SearchFilm />
      </View>
      <ScrollView horizontal={true} style={styles.carousel}>
        {movies.map(movie => (
          <View key={movie.id} style={styles.movie}>
            <Text>{movie.title}</Text>
            <Image source={movie.cover} style={styles.cover} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  carousel: {
    paddingLeft: 10,
  },
  movie: {
    marginRight: 10,
    marginTop: 30,
  },
  cover: {
    width: 200,
    marginTop: 30,
    height: 300,
  },
});
