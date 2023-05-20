import React, {useState} from 'react';
import QrReader from 'react-qr-reader';

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
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%'}}
      />
      <p>{result}</p>
    </div>
  );
}

export default BarcodeScanner;
