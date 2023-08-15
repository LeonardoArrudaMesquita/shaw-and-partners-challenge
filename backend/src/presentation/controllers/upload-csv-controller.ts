import csvParser from 'csv-parser'
import { badRequestError, internalServerError, ok } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { Readable } from 'stream'
import { type HttpResponse } from '../protocols/http'
import { setCSVData } from '../../data/data-storage'

type CSVRow = Record<string, string>

const data: CSVRow[] = []

export class UploadCSVController implements Controller {
  async handle (request: UploadCSVController.Request): Promise<HttpResponse> {
    try {
      if (!request.file) {
        return badRequestError()
      }
      setCSVData([])
      const fileBuffer = request.file.buffer
      const stream = Readable.from(fileBuffer)

      const csvStream = csvParser()
      csvStream.on('data', (row: CSVRow) => data.push(row))

      stream.pipe(csvStream)

      setCSVData(data)
      return ok(data)
    } catch (error) {
      return internalServerError()
    }
  }
}

export namespace UploadCSVController {
  export type Request = {
    file: {
      buffer: any
    }
  }
}
