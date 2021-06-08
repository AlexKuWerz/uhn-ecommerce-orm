const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL',
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL',
});

Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false,
    },
    as: 'product_tags',
    onDelete: 'CASCADE',
});

Tag.belongsToMany(Product, {
    through: {
        model: ProductTag,
        unique: false,
    },
    as: 'tag_products',
    onDelete: 'CASCADE',
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
