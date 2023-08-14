import { internalServerError } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'

export default class CSVController implements Controller {
  handle (httpRequest: any): any {
    try {
      if (!httpRequest.query) {
        return {
          statusCode: 400
        }
      }

      return {
        statusCode: 400
      }
    } catch (error) {
      return internalServerError()
    }
  }
}
