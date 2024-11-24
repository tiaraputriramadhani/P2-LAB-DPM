import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const DimensionExample = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Window Width: {windowWidth.toFixed(2)}</Text>
        <Text style={styles.text}>Window Height: {windowHeight.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEECC', // Memberikan warna latar belakang untuk estetika
  },
  box: {
    backgroundColor: '#FF6F61',
    padding: 20,
    borderRadius: 10, // Membuat sudut kotak melengkung
    alignItems: 'center', // Menempatkan teks di tengah kotak
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF ', // Warna teks yang lebih terlihat
    marginBottom: 5, // Jarak antar teks
  },
});

export default DimensionExample;
