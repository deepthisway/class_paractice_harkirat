"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const client = new Client({
//     connectionString: "postgresql://alltests_owner:73oqKuyVFBcR@ep-muddy-king-a4e6xr0i.us-east-1.aws.neon.tech/alltests?sslmode=require"
// });
// async function createUsersTable() {
//     await client.connect();
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(100) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//     console.log("Table created:", result);
//     await client.end(); // Close the connection after the query
// }
// createUsersTable();
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://alltests_owner:73oqKuyVFBcR@ep-muddy-king-a4e6xr0i.us-east-1.aws.neon.tech/alltests?sslmode=require"
        });
        try {
            yield client.connect();
            const insertQuery = `
            INSERT INTO users (username, email, password) 
            VALUES ($1, $2, $3)
        `;
            const values = ['Deepanshu', 'deepanshu@gmail.com', 'dsnfn232'];
            const res = yield client.query(insertQuery, values);
            console.log("Insertion success", res);
        }
        catch (error) {
            console.log("Error inserting data:", error);
        }
        finally {
            yield client.end(); // Ensure the client is closed
        }
    });
}
insertData();
