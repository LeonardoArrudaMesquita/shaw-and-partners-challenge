import { UploadCSVController } from './upload-csv-controller'

type SutTypes = {
  sut: UploadCSVController
}

const makeSut = (): SutTypes => {
  const sut = new UploadCSVController()
  return {
    sut
  }
}

describe('Upload CSV Controller', () => {
  const csvFile = Buffer.from('name,city\nJohn,New York\nJane,London', 'utf-8')

  it('returns bad request when no file is provided', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({} as any)
    expect(httpResponse.statusCode).toEqual(400)
  })

  it.skip('returns CSV data when a file is provided', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({ file: csvFile })
    expect(httpResponse.statusCode).toEqual(200)
  })

  it('returns internal server error when some error occur', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({ file: { buffer: {} } })
    expect(httpResponse.statusCode).toEqual(500)
  })
})
