const jwt = require('jsonwebtoken')
import env from '../utils/env'

export const createJWT = (params: Object) => {
  try {
    return jwt.sign({ params }, env.jwtSecretKey, { expiresIn: '1h' })
  } catch (error) {
    return null
  }
}
export const createdCorrectly = (jwt: string) => {
  if (jwt !== null) {
    return jwt
  } else {
    return null
  }
}