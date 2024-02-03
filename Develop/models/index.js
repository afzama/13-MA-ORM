// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: "category_name"
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id',
  as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'tag_id',
  as: 'associated_products',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
