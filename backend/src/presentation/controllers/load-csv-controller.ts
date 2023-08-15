import { ok } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { type HttpResponse } from '../protocols/http'
import { getCSVData } from '../../data/data-storage'

export class LoadCSVController implements Controller {
  async handle (request: LoadCSVController.Request): Promise<HttpResponse> {
    const data = getCSVData()

    const filteredCSVData = data.filter((row) => {
      const values = Object.values(row)

      return values.some(value =>
        value.toString().toLowerCase().includes(request.q.toLowerCase())
      )
    })

    return ok(filteredCSVData)
  }
}

export namespace LoadCSVController {
  export type Request = {
    q: string
  }
}
