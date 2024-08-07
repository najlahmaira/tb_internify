const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const token_sekretaris = sequelize.define('token', {
    id_token:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    token:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nip:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    expires_at:{
        type: DataTypes.DATE,
        defaultValue: () => new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000))
    }
}, {
    tableName:'token_sekretaris',
    timestamps: false
})

module.exports = token_sekretaris