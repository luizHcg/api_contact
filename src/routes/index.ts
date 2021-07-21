import { Router } from 'express'
import Mail from '@controllers/Mail'
import { SentMessageInfo } from 'nodemailer'
import auth from '../middlewares/AuthMiddleware'

const routes = Router()

routes.get('/', (req, res) => {
  return res.redirect('/api-docs')
})

routes.post('/send', auth, async (req, res) => {
  const { mail: replyTo, subject, message, name, enterprise } = req.body

  return await new Mail(replyTo, subject, message, name, enterprise)
    .sendMsg()
    .then((info: SentMessageInfo | string) => {
      if (typeof info === 'string') {
        return res.status(406).json({ message: info, sent: false })
      } else return res.status(202).json({ message: 'Enviado', sent: true })
    }).catch(error => {
      throw res.status(406).json(error)
    })
})

export default routes
