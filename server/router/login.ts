const express = require('express')
const router = express.Router()

router.get('/',(req:Request,res:Response) => {
  res.json()
})
router.post('/adios',(req:Request,res:Response) => {
  res.json()
})

module.exports = router