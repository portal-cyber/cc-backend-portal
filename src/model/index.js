'use strict'
const {Sequelize,DataTypes}=require('sequelize');
const usersModel = require('./users/users.model');

const POSTGRES_URI=process.env.DB_URL;

const sequelize=new Sequelize(POSTGRES_URI,{})
const users=usersModel(sequelize,DataTypes)


module.exports={
    db:sequelize,
    DataTypes,
    usersModel:users,
}