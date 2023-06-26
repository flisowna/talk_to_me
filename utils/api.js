import axios from 'axios';

const API_TOKEN = process.env.API_TOKEN;

export const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://apitable.com/fusion/v1/datasheets/dst2XGcmZsqYp0v0rl/records?viewId=viwJQEh5WGcv9&fieldKey=name',
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const updateData = async (recordId, newName) => {
  try {
    const response = await axios.put(
      `https://apitable.com/fusion/v1/datasheets/dst2XGcmZsqYp0v0rl/records/${recordId}`,
      {
        name: newName,
      },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const updateProductionDeployment = async (releaseNumber) => {
  try {
    // Implement the logic to update the production deployment
    // You can use any deployment platform or custom logic here

    // Example: Log the release number
    console.log('New release number:', releaseNumber);
  } catch (error) {
    console.error('Error updating production deployment:', error);
    throw error;
  }
};