import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import express, { Application, ErrorRequestHandler } from 'express'
import helmet from 'helmet'
import { ZodError } from 'zod'
import cookieParser from 'cookie-parser'
import { logger } from "utils/logger";
import routes from './routes'
import { initializePassport } from 'middleware'
const app: Application = express()
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(initializePassport())
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err)
  if (err instanceof ZodError) {
    res.status(400)
    return res.json(err.issues)
  }
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send('Invalid token')
  }
  res.status(err?.statusCode ?? err?.code ?? 500)
  return res.json({
    success: false,
    message: err.message ?? 'failed',
  })
}
routes(app)
app.use(errorHandler)
export default app