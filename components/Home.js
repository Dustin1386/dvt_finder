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

export default function HomeScreen() {
  const movies = [
    {id: 1, title: 'Pitch Perfect 1', cover: require('../comingsoon.jpeg')},
    {id: 2, title: 'Pitch Perfect 2', cover: require('../comingsoon.jpeg')},
    {id: 3, title: 'Pitch Perfect 3', cover: require('../comingsoon.jpeg')},
    {id: 4, title: 'Predator', cover: require('../comingsoon.jpeg')},
    {id: 5, title: 'Predator 3', cover: require('../comingsoon.jpeg')},
    // ...other movies
  ];
  const [inputValue, setInputValue] = useState('');

  const findFilm = searchQuery => {
    console.log(searchQuery);
  };
  const handleInputChange = text => {
    setInputValue(text);
    console.log(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AddFilm />
        <TextInput
          onChangeText={handleInputChange}
          style={styles.search}
          placeholder="Search..."
        />
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
    paddingTop: 50,
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
