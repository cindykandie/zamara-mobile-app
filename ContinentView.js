import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    padding: 20,
    fontSize: 28,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const ContinentView = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>CONTINENTS</Text>
        <Text style={styles.item}>AF - Africa</Text>
        <Text style={styles.item}>AN - Antarctica</Text>
        <Text style={styles.item}>AS - Asia</Text>
        <Text style={styles.item}>EU - Europe</Text>
        <Text style={styles.item}>NA - North America</Text>
        <Text style={styles.item}>OC - Oceania</Text>
        <Text style={styles.item}>SA - South America</Text>
    </View>
  )
}

export default ContinentView;
