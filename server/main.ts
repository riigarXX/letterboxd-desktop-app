import express, { Express, Request, Response } from 'express'
const cors = require('cors')
const fs = require('fs')

const port = 3000

const app: Express = express()

app.use(express.json())
app.use(cors())
app.use((req:Request, res:Response, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

fs.readdirSync('./router').forEach((file:string) => {
  console.log(file);
  app.use(`/${file.split('.')[0]}`, require(`./router/${file.split('.')[0]}`))
})

app.listen(port, () => {
  console.log('Server listen in port', port);
})