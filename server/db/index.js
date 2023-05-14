import pg from'pg'

console.log(process.env.PASSWORD, process.env.HOST, process.env.DBPORT)
 
export const pool = new pg.Pool({
  user: "postgres",
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'yelp-clone'
})