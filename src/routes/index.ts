import { Router } from 'express'

import { MailerController } from '../controllers/MailerController'
const mailer = new MailerController()
const routes = Router()

routes.use('/', mailer.send)
export { routes }
