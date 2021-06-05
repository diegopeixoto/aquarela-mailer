import mail from '@sendgrid/mail'
import * as dotenv from 'dotenv-safe'

dotenv.config()

type IMailer = {
    from: string
    to: string
    subject?: string
    text?: string
    html?: string
    template_id?: string
    dynamic_template_data?: Record<string, string | number | boolean>
}

export class MailerService {
    async send({
        from,
        to,
        subject,
        text,
        html,
        template_id,
        dynamic_template_data
    }: IMailer): Promise<void | string> {
        const mailContent = {
            to,
            from,
            subject,
            text,
            html,
            template_id,
            dynamic_template_data
        }
        mail.setApiKey(process.env.SENDGRID_API_KEY)

        await mail
            .send(mailContent)
            .then((response) => {
                console.log('Email sent to ' + to)
                console.log(response[0].statusCode)
                console.log(response[0].headers)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
