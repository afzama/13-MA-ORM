const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const ProductTag = require('./ProductTag');
const Product = require('./Product')

class Tag extends Model { }

Tag.init(
  {
    // define columns
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'tag_id',
  as: 'product_tag',
});

module.exports = Tag;
