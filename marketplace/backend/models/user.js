export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
        defaultValue: 'user',
      },
    });
  
    User.associate = (models) => {
      User.hasMany(models.Product, { foreignKey: 'userId', as: 'products' });
      User.hasMany(models.Order, { foreignKey: 'userId', as: 'orders' });
    };
  
    return User;
  };
  