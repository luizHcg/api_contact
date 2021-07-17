import {Router} from "express";
import Mail from "@controllers/Mail";

const routes = Router()

routes.get('/', (request, response) => {
    return response.json({message: 'Hello Word! -__-'})
})

routes.post('/send', (request, response) => {
    new Mail(request.body.email, request.body.assunto, request.body.mensagem, request.body.nome)
        .sendMsg()
        .then(info => {
            return response.status(202).json(info.accepted)
        }).catch(error => {
        return response.status(406).json(error)
    })
})

export default routes
