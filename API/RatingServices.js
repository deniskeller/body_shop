import axios from 'axios';

const getAllUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response;
};

export default getAllUsers;
