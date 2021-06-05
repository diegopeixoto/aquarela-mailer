import * as dotenv from 'dotenv-safe'
import express from 'express'

import { routes } from './routes'
import { ServerParams } from './utils/serverparams'
dotenv.config()

const isProd = process.env.NODE_ENV === 'production'

const PORT = isProd ? 80 : 3333
const HOST = '0.0.0.0'
const VERSION = process.env.VERSION
const server = new ServerParams()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, HOST, () => server.roll({ PORT, HOST, VERSION }))
