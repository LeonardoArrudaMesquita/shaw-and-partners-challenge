import { bodyParser, contentType, cors } from '../middlewares'

import { type Express } from 'express'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(contentType)
  app.use(cors)
}
