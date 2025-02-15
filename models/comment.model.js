import { DataTypes } from "sequelize";
import db from "../config/db.js";
import User from "./user.model.js"
import Course from "./course.model.js"

const Comment = db.define(
  "comments",
{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    star: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: true,
},
);

Comment.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Comment, { foreignKey: "userId" });

Comment.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(Comment, { foreignKey: "courseId" });

export default Comment
