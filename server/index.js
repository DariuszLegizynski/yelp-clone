import express from 'express'
import cors from "cors"
import "dotenv/config.js"

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server is up an running on port ${PORT}`)
})