const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "post",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      userid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      contents: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      imgInfo1: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      imgInfo2: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      option1: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      option2: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      option1_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      option2_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      tags: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "post",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "userid",
          using: "BTREE",
          fields: [{ name: "userid" }],
        },
      ],
    }
  );
};
