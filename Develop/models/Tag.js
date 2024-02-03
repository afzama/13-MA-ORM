const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const ProductTag = require('./ProductTag');
const Product = require('./Product')

class Tag extends Model { }

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // tag_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    product_tag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ProductTag,
        Key: 'id'
      },
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

module.exports = Tag;
