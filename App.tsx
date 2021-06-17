import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from "./src/header/Header";
import {Dashboard} from "./src/dashboard/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});
