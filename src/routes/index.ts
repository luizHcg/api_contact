import { Router } from 'express'
import Mail from '@controllers/Mail'
import { SentMessageInfo } from 'nodemailer'

const routes = Router()

routes.get('/', (req, res) => {
  return res.redirect('/api-docs')
})

routes.post('/send', (req, res) => {
  const { mail: replyTo, subject, message, name, enterprise } = req.body

  return new Mail(replyTo, subject, message, name, enterprise)
    .sendMsg()
    .then((info: SentMessageInfo | string) => {
      if (typeof info === 'object') {
        return res.status(202).json({ message: 'Enviado', sent: true })
      } else res.status(406).json({ message: info, sent: false })
    }).catch(error => {
      return res.status(406).json(error)
    })
})

export default routes
