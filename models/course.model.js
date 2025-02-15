import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Category from "./category.model.js"
import User from "./user.model.js"

const Course = db.define(
  "courses",
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
    teacherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: true,
},
);

Course.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Course, { foreignKey: "categoryId" });

Course.belongsTo(User, { foreignKey: "teacherId" });
User.hasMany(Course, { foreignKey: "teacherId" });

export default Course
