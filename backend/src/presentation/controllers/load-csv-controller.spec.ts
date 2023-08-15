import { LoadCSVController } from './load-csv-controller'
import { setCSVData } from '../../data/data-storage'

type SutTypes = {
  sut: LoadCSVController
}

const makeSut = (): SutTypes => {
  const sut = new LoadCSVController()
  return {
    sut
  }
}

describe('Load CSV Controller', () => {
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

  it('returns a filtered CSV data when a query param is provided', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({ q: 'Leonardo' })
    expect(httpResponse.statusCode).toEqual(200)
  })

  it('returns all CSV data when no query param is provided', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({})
    expect(httpResponse.body.length).toBe(2)
  })

  it('returns empty when a non-matching query param is provided', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({ q: 'XXXXXX' })
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body.length).toBe(0)
  })
})
