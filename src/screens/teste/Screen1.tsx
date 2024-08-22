import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';

const Screen1: React.FC = () => {
  // Dados fake para popular o dashboard
  const fakeData = {
    totalCars: 5,
    recentCars: [
      { model: 'Model S', make: 'Tesla', year: 2020, color: 'Red' },
      { model: 'Mustang', make: 'Ford', year: 2019, color: 'Blue' },
      { model: 'Civic', make: 'Honda', year: 2018, color: 'Black' },
      { model: 'Corolla', make: 'Toyota', year: 2017, color: 'White' },
      { model: 'Camaro', make: 'Chevrolet', year: 2016, color: 'Yellow' },
    ],
  };

  // Referências de animação
  const rotation = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação de rotação e opacidade
    Animated.parallel([
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [rotation, opacity]);

  // Interpolação de rotação
  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <Animated.View style={[styles.card, { transform: [{ rotate }], opacity }]}>
        <Text style={styles.cardTitle}>Total Cars</Text>
        <Text style={styles.cardValue}>{fakeData.totalCars}</Text>
      </Animated.View>
      <Animated.View style={[styles.card, { transform: [{ rotate }], opacity }]}>
        <Text style={styles.cardTitle}>Recent Cars</Text>
        {fakeData.recentCars.map((car, index) => (
          <View key={index} style={styles.carItem}>
            <Text style={styles.carText}>{`${car.year} ${car.make} ${car.model} (${car.color})`}</Text>
          </View>
        ))}
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'tomato',
  },
  carItem: {
    marginBottom: 8,
  },
  carText: {
    fontSize: 16,
  },
});

export default Screen1;