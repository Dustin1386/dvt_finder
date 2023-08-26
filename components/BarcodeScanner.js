import React, {useState} from 'react';
import {View, Text} from 'react-native';

function BarcodeScanner() {
  const [result, setResult] = useState('');

  const handleScan = data => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <View>
      <Text>{result}</Text>
    </View>
  );
}

export default BarcodeScanner;
