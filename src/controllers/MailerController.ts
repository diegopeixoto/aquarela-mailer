import { Request, Response } from 'express'

import { MailerService } from '../services/MailerService'

export class MailerController {
    async send(request: Request, response: Response): Promise<any> {
        const mail = new MailerService()
        const { from, to, subject, text, html, template_id, dynamic_template_data } = request.body
        try {
            const mailSent = await mail.send({
                to,
                from,
                subject,
                text,
                html,
                template_id,
                dynamic_template_data
            })

            return response.json(mailSent)
        } catch (e) {
            return response.status(400).json({ success: false, message: e })
        }
    }
}
