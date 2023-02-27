import { QueryDocumentSnapshot, QuerySnapshot } from '@firebase/firestore-types'
import express,{Request,Response} from 'express'
const router = express.Router()
const {fireStore, collection, getDocs, addDoc} = require('../api/firebase')
import User from '../types/User'

router.get('/loadUserData',async (req:Request,res:Response) => {
  const querySnapshot = await getDocs(collection(fireStore,'clientes'))
  let data = <Array<User>>[]
  querySnapshot.forEach((x:QueryDocumentSnapshot<User>) => {
    data.push(x.data())
  })
  res.json(data)
})

module.exports = router