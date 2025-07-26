import dotenv from 'dotenv'

dotenv.config()

const NODE_PORT = process.env.NODE_PORT
const DB_KEY = process.env.DB_KEY
const DB_URI = process.env.DB_URI

if (!NODE_PORT) {
  throw new Error('NODE_PORT is not defined in the .env file')
}

if (!DB_KEY) {
  throw new Error('DB_KEY is not defined in the .env file')
}

if (!DB_URI) {
  throw new Error('DB_URI is not defined in the .env file')
}

DB_URI.replace('%KEY%', DB_KEY)

export { NODE_PORT, DB_URI }
