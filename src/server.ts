import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//   res.send('hii')
// })

app.listen(3000, () => {
  console.log('App listening to requests on port 3000')
})
