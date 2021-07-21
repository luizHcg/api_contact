import jwt from 'jsonwebtoken'
import ProviderConfig from '@configs/private/ProviderConfig.private'
import { NextFunction, Request, Response } from 'express'

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token: string | string[] | undefined = req.headers.authorization

  if (typeof token === 'undefined') return res.status(403).json({ auth: false, message: 'Falha na autenticação' })

  const BEARER: string = token.split(' ')[0]
  const TOKEN: string = token.split(' ')[1]

  if (BEARER.localeCompare('Bearer')) return res.status(401).json({ auth: false, message: 'TOKEN não correspondente.' })

  jwt.verify(TOKEN, ProviderConfig.API_TOKEN, function (err) {
    if (err) return res.status(401).json({ auth: false, message: 'TOKEN incorreto' })
    next()
  })
}

export default auth
