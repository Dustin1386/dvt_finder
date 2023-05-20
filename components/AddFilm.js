import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

function AddFilm({navigation}) {
  const addFilm = () => {
    console.log('Add film');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Add" onPress={() => navigation.navigate('AddFilm')} />
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
