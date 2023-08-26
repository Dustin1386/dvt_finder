import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
function SearchFilm() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text: React.SetStateAction<string>) => {
    setInputValue(text);
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          onChangeText={handleInputChange}
          style={styles.search}
          placeholder="Search..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default SearchFilm;
