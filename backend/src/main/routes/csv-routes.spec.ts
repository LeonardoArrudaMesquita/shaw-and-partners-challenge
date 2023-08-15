import { type Express } from 'express'
import { setupApp } from '../config/app'
import request from 'supertest'
import { setCSVData } from '../../data/data-storage'
let app: Express

describe('CSV Routes', () => {
  beforeAll(() => {
    app = setupApp()
  })

  describe('POST /files', () => {
    const csvFile = Buffer.from('name,city\nJohn,New York\nJane,London', 'utf-8')
    it('returns 200 when a CSV file is uploaded', async () => {
      await request(app)
        .post('/api/files')
        .attach('file', csvFile, 'mock.csv')
        .expect(200)
    })

    it('returns 400 when no CSV is uploaded', async () => {
      await request(app)
        .post('/api/files')
        .expect(400)
    })
  })

  describe('GET /users', () => {
    beforeAll(() => {
      const csvData = [
        { name: 'Leonardo', city: 'São Paulo' },
        { name: 'Daniel', city: 'Rio de Janeiro' }
      ]
      setCSVData(csvData)
    })

    afterAll(() => {
      setCSVData([])
    })

    it('returns filtered CSV data', async () => {
      const response = await request(app)
        .get('/api/users')
        .query({ q: 'paulo' })

      expect(response.status).toBe(200)
      expect(response.body.length).toBe(1)
      expect(response.body[0].name).toBe('Leonardo')
      expect(response.body[0].city).toBe('São Paulo')
    })

    it('returns entire CSV Data when no query params is provided', async () => {
      const response = await request(app)
        .get('/api/users')

      expect(response.status).toBe(200)
      expect(response.body.length).toBe(2)
    })
  })
})
