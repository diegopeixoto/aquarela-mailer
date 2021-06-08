import cors from 'cors'
import * as dotenv from 'dotenv-safe'
import express from 'express'

import { routes } from './routes'
import { ServerParams } from './utils/serverparams'
dotenv.config()

const isProd = process.env.NODE_ENV === 'production'

const PORT = 4666
const HOST = '0.0.0.0'
const VERSION = process.env.VERSION
const server = new ServerParams()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(routes)

app.listen(PORT, HOST, () => server.roll({ PORT, HOST, VERSION }))
