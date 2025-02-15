import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Category = db.define(
  "categories",
{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
},
{
    timestamps: true,
},
);

export default Category
