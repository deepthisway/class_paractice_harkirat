import { Client } from 'pg';

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

async function insertData() {
    const client = new Client({
        connectionString: "postgresql://alltests_owner:73oqKuyVFBcR@ep-muddy-king-a4e6xr0i.us-east-1.aws.neon.tech/alltests?sslmode=require"
    });

    try {
        await client.connect();
        const insertQuery = `
            INSERT INTO users (username, email, password) 
            VALUES ($1, $2, $3)
        `;
        const values = ['Deepanshu', 'deepanshu@gmail.com', 'dsnfn232'];
        
        const res = await client.query(insertQuery, values);
        console.log("Insertion success", res);
    } catch (error) {
        console.log("Error inserting data:", error);
    } finally {
        await client.end();
    }
}

insertData();
