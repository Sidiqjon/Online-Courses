import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Course from "./course.model.js"

const Lesson = db.define(
  "lessons",
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
    videoLink: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: true,
},
);

Lesson.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(Lesson, { foreignKey: "courseId" });

export default Lesson
