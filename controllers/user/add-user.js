import DB from '../../config/database';

const AddUser = async ({
  name,
  email,
  password
}) => {
  // Inserting  a new user record
  await DB.users.create({
    name,
    email,
    password
  });

  return {
    message: 'User Created Successfully!'
  };
};

export default AddUser;
