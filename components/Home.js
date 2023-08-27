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
import {movies} from './MoviesDB';

export default function HomeScreen({navigation}) {
  const [inputValue, setInputValue] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.last_name.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AddFilm navigation={navigation} />
        <SearchFilm inputValue={inputValue} setInputValue={setInputValue} />
      </View>
      <ScrollView horizontal={true} style={styles.carousel}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <View key={movie.id} style={styles.movie}>
              <Text>{movie.last_name}</Text>
              <Image source={movie.cover} style={styles.cover} />
            </View>
          ))
        ) : (
          <Text style={styles.notFoundText}>Movie not found</Text>
        )}
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
  notFoundText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
