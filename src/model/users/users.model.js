'use strict'
const usersModel=(sequelize,DataTypes)=>{
    const model=sequelize.define('users',{
        emial:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        },
       
    })

    return model;
}
module.exports=usersModel