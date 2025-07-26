import express from 'express'
import colors from 'colors'
import { DB_URI, NODE_PORT } from './config/env.config'

const app = express()

app.get('/', (req, res) => {
  res.send('hii')
})

app.listen(NODE_PORT, () => {
  console.log(
    colors.white.bgGreen('\t  App listening to requests on port ' + NODE_PORT + '\t  ').underline
      .bold
  )
})
