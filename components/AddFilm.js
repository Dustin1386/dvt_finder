import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

function AddFilm() {
  const addFilm = () => {
    console.log('Add film');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Add" onPress={() => addFilm()} />
      </View>
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
});

export default AddFilm;
