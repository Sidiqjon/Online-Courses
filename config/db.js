import { Sequelize } from "sequelize";

let db = new Sequelize ({
    database: "online_courses",
    host: "localhost",
    username: "root",
    password: "yusuf777$",
    dialect: "mysql",
    logging: false,
})

export default db
