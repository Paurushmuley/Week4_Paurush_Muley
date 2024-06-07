import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { v4 as uuidv4 } from 'uuid';

interface UserAttributes {
  id?: string;
  email: string;
  password: string;
  role: string; 
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public email!: string;
  public password!: string;
  public role!: string;

  // Add method to check password
  public async checkPassword(password: string): Promise<boolean> {
    const bcrypt = require('bcryptjs');
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

// Hash password before saving
User.beforeCreate(async (user) => {
  const bcrypt = require('bcryptjs');
  user.password = await bcrypt.hash(user.password, 10);
});

export default User;
