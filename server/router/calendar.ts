import { DocumentReference, Timestamp } from '@firebase/firestore-types';
import express, { Request, Response } from 'express'
const router = express.Router()
import { convertTimestamp } from '../functions/formatFirebaseDate'

const { fireStore, collection, getDocs, addDoc, getDoc, doc } = require('../api/firebase')
import { DocumentSnapshot, QueryDocumentSnapshot, QuerySnapshot } from '@firebase/firestore-types'
import Entrenamiento from '../types/Entrenamiento'

router.get('/getTrainings', async (req: Request, res: Response) => {
  const querySnapshot = await getDocs(collection(fireStore, 'entrenamientos'))
  let data = <Array<Entrenamiento>>[]
  querySnapshot.forEach((x: QueryDocumentSnapshot<Entrenamiento>) => {
    data.push({ ...x.data(), fechaFormated: convertTimestamp(x.data()?.fecha), idFirebase: x.id })
  })
  res.json(data)
})
router.post('/loadUserDayTraining', async (req: Request, res: Response) => {
  const { idFirebase } = req.body

  const docRef:DocumentReference = await doc(fireStore, 'entrenamientos',idFirebase)
  const docSnap:DocumentSnapshot<Entrenamiento>  = await getDoc(docRef)
  
  res.json({...docSnap.data(),fechaFormated:convertTimestamp(docSnap.data()?.fecha)})
})

module.exports = router