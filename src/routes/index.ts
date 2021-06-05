import { Router } from 'express'

import { MailerController } from '../controllers/MailerController'
const mailer = new MailerController()
const routes = Router()

routes.get('/', (req, res) => {
    res.status(400).send('ahoy, wrong method ay')
})
routes.post('/', mailer.send)
export { routes }
