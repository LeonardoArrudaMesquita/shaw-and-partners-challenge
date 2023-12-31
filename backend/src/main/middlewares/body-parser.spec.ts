import { setupApp } from '../config/app'

import { type Express } from 'express'
import request from 'supertest'

let app: Express

describe('Body Parser Middleware', () => {
  beforeAll(() => {
    app = setupApp()
  })

  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Rodrigo' })
      .expect({ name: 'Rodrigo' })
  })
})
