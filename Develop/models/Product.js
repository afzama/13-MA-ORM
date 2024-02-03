// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 10
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // references: {
      //   model: Category,
      //   key: 'category_id'
      // },
    },
    // tag_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   // references: {
    //   //   model: Product,
    //   //   key: 'id'
    //   // }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// Add the belongsToMany association
Product.belongsTo(Category, { foreignKey: 'category_id' });

Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id',
  as: 'product_tag'
});


module.exports = Product;
