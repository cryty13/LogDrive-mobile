import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, ScrollView, Dimensions } from 'react-native';
import { useQuery } from 'react-query';
import { BarChart } from 'react-native-chart-kit'; // Biblioteca para gráficos
import { AuthContext } from '../../context/AuthContext';
import { carInfo, revisions, maintenanceData } from '../../mockData';

// Funções para buscar dados
// const fetchCarInfo = async () => {
//   const response = await fetch('https://api.example.com/car');
//   return response.json();
// };

// const fetchRevisions = async () => {
//   const response = await fetch('https://api.example.com/revisions');
//   return response.json();
// };

const DashboardScreen: React.FC = () => {
  // const { data: carInfo, isLoading: carLoading } = useQuery('carInfo', fetchCarInfo);
  // const { data: revisions, isLoading: revisionsLoading } = useQuery('revisions', fetchRevisions);


  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { logout } = authContext;

  // if (carLoading || revisionsLoading) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Dashboard</Text>
  
        {/* Informações do Carro */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Car Information</Text>
          <View style={styles.carInfo}>
            <Text>Model: {carInfo.model}</Text>
            <Text>Year: {carInfo.year}</Text>
            <Text>License Plate: {carInfo.licensePlate}</Text>
            <Text>Status: {carInfo.status}</Text>
          </View>
        </View>
  
        {/* Últimas Revisões */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Latest Revisions</Text>
          <FlatList
            data={revisions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.revisionItem}>
                <Text>Date: {item.date}</Text>
                <Text>Description: {item.description}</Text>
                <Text>Cost: ${item.cost}</Text>
              </View>
            )}
          />
        </View>
  
        {/* Gráfico de Manutenção */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Maintenance Chart</Text>
          <BarChart
            yAxisSuffix=""
            style={styles.chart}
            data={maintenanceData}
            width={screenWidth - 32}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </View>
  
        {/* Ações Rápidas */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Quick Actions</Text>
          <Button title="Schedule Maintenance" onPress={() => { /* Lógica para agendar manutenção */ }} />
          <Button title="Add New Revision" onPress={() => { /* Lógica para adicionar nova revisão */ }} />
        </View>
      </ScrollView>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  carInfo: {
    marginBottom: 16,
  },
  revisionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
export default DashboardScreen;