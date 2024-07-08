import DB from '../../config/database';

const GetUsers = async () => {
  // Retrieve all user records
  const users = await DB.users.findAll();

  // Returning the retrieved users
  return {
    users
  };
};

export default GetUsers;
