import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useQuery, useMutation, useQueryClient } from 'react-query';

// Função para buscar dados da API
const fetchCars = async () => {
  const response = await fetch('http://10.0.2.2:3000/api/health');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log(response);
  return response.json();
};

// Função para adicionar um novo carro
const addCar = async (newCar) => {
  const response = await fetch('https://api.example.com/cars', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCar),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Screen2: React.FC = () => {
  const queryClient = useQueryClient();

  // Usar useQuery para buscar dados
  const { data, error, isLoading } = useQuery('cars', fetchCars);

  // Usar useMutation para adicionar um novo carro
  const mutation = useMutation(addCar, {
    onSuccess: () => {
      // Invalidar e refetch os dados da query 'cars'
      queryClient.invalidateQueries('cars');
    },
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cars</Text>
      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.make} {item.model}</Text>
            <Text style={styles.cardValue}>{item.year}</Text>
          </View>
        )}
      /> */}
      <Button
        title="Add Car"
        onPress={() => mutation.mutate({ make: 'New', model: 'Car', year: 2021 })}
      />
    </View>
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
});

export default Screen2;