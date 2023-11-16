const Sequelize = require('sequelize');
const db = require('../config/Database');
const Users = require('./UserModel');

const {DataTypes} = Sequelize;

const Products = db.define('products', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100],
        }
    },
    price: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true,
});

Users.hasMany(Products);
Products.belongsTo(Users, {foreignKey: 'userId'});

export default Products;
