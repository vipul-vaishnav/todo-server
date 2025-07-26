import dotenv from 'dotenv'

dotenv.config()

const NODE_PORT = process.env.NODE_PORT

if (!NODE_PORT) {
  throw new Error('NODE_PORT is not defined in the .env file')
}

export { NODE_PORT }
