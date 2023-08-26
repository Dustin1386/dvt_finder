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
  console.log(movies.map(film => film.cover));
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AddFilm navigation={navigation} />
        <SearchFilm inputValue={inputValue} setInputValue={setInputValue} />
      </View>
      <ScrollView horizontal={true} style={styles.carousel}>
        {movies
          .filter(item => {
            console.log(item.last_name.includes(inputValue));
            return item.last_name
              .toLowerCase()
              .includes(inputValue.toLocaleLowerCase());
          })
          .map(movie => (
            <View key={movie.id} style={styles.movie}>
              <Text>{movie.last_name}</Text>
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
