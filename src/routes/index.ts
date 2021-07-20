import { Router } from 'express'
import Mail from '@controllers/Mail'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json(req.url)
})

routes.post('/send', (req, res) => {
  return new Mail(req.body.mail, req.body.subject, req.body.message, req.body.name, req.body.enterprise)
    .sendMsg()
    .then(info => {
      return res.status(202).json(info)
    }).catch(error => {
      return res.status(406).json(error)
    })
})

export default routes
