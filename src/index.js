import app from "./app.js";
import { sequelize } from "./databases/connection.js";

async function main() {
    try {
        await sequelize.sync({ alter: true })
        app.listen(3000);
        console.log("Run Server in port ----> ", 3000)
    } catch (err) {
        console.error("Error connect to database", err)
    }
}

main();