// src/mockData.ts
export const carInfo = {
    model: 'Toyota Corolla',
    year: 2020,
    licensePlate: 'ABC-1234',
    status: 'Available',
  };
  
  export const revisions = [
    { id: 1, date: '2023-01-15', description: 'Oil change', cost: 50 },
    { id: 2, date: '2023-02-20', description: 'Brake pads replacement', cost: 150 },
    { id: 3, date: '2023-03-10', description: 'Tire rotation', cost: 30 },
  ];
  
  export const maintenanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };