import Sequelize from 'sequelize';

// Defining the Users model
const Users = (sequelize) => {
  const usersSchema = sequelize.define('users', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: true // Automatically include timestamps createdAt and updatedAt
  });

  return usersSchema;
};

export default Users;
