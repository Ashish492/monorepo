import { Router } from 'express'
import { createSessionHandler, deleteSessionHandler, getSessionHandler, issueToken } from '../controller'
import { sessionRequestSchema} from 'types'
import { auth, validate } from 'middleware'
import { customRouteFunction } from 'utils'
export const sessionRouter = Router()
sessionRouter
  .route('/')
  .post(validate(sessionRequestSchema), customRouteFunction(createSessionHandler))
  .get(auth(), customRouteFunction(getSessionHandler))
sessionRouter.route('/delete').patch(auth(), customRouteFunction(deleteSessionHandler))
sessionRouter.route('/token').get(customRouteFunction(issueToken))
