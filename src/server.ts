import express from 'express'
import colors from 'colors'
import { NODE_PORT } from './config/env.config'
import prisma from './lib/prisma-client'

const app = express()

app.get('/health', async (req, res) => {
  try {
    await prisma.$connect()
    console.log('API health is good, db connection successfull')
    res.status(200).send('API health is good, db connection successfull')
  } catch (error) {
    console.log(error)
    res.status(500).send('API health is not good, db connection failed')
  }
})

app.listen(NODE_PORT, () => {
  console.log(
    colors.white.bgGreen('  App listening to requests on port ' + NODE_PORT + '  ').underline.bold
  )
})
