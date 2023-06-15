import express, { Express, Request, Response } from 'express'
const cors = require('cors')
const fs = require('fs')
const morgan = require('morgan')
import './db/index'
import env from './utils/env'

const port = env.port

const app: Express = express()

app.use(morgan('dev'))

app.use(express.json())
app.use(cors())
app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

fs.readdirSync('./router').forEach((file: string) => {
  const fileScaped = file.split('.')[0]
  app.use(`/${fileScaped}`, require(`./router/${fileScaped}`))
})

app.listen(port, () => {
  console.log('Server listen in port', port);
})