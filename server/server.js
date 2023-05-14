import express from 'express'
import cors from "cors"
import "dotenv/config.js"

import { pool } from "./db/index.js"

const app = express()
app.use(cors())

const API_URL = process.env.API_URL

app.use(express.json())

app.get(`${API_URL}`, async (req, res) => {
  try {
    const getRestaurants = await pool.query("SELECT * FROM restaurants")
    console.log(res.json(getRestaurants.rows))
  } catch (err) {
    console.error(err)
  }
  
})

app.get(`${API_URL}/:id`, (req, res) => {
  console.log(req.params)
})

app.post(`${API_URL}`, (req, res) => {
  res.send("add")
  console.log(req.body)
})

app.put(`${API_URL}/:id`, (req, res) => {
  res.send("updated")
  console.log(req.params.id)
})

app.delete(`${API_URL}/:id`, (req, res) => {
  res.send("deleted")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server is up an running on port ${PORT}`)
})