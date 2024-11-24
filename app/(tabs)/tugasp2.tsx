import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FlexBoxExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Hello, World!</Text>
      <Text style={styles.subText}>Pacar Jeno di sini</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.leftBox]}>
          <Text style={styles.boxText}>YES</Text>
        </View>
        <View style={[styles.box, styles.rightBox]}>
          <Text style={styles.boxText}>YES</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
  },
  centerText: {
    fontSize: 24, 
    color: "blue", 
    fontWeight: "bold", 
    marginBottom: 10, 
  },
  subText: {
    fontSize: 16, 
    color: "gray", 
  },
  boxContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    width: "80%", 
  },
  box: {
    width: 100, 
    height: 100, 
    borderRadius: 10, 
    justifyContent: "center",
    alignItems: "center",
  },
  leftBox: {
    backgroundColor: "#FF6F61", 
  },
  rightBox: {
    backgroundColor: "#4682B4",
  },
  boxText: {
    fontSize: 16, 
    color: "#FFFFFF", 
    fontWeight: "bold",
  },
});

export default FlexBoxExample;
