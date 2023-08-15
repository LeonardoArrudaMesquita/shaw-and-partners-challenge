import { type Controller } from '../protocols/controller'

export class LoadCSVController implements Controller {
  handle (request: LoadCSVController.Request): any {}
}

export namespace LoadCSVController {
  export type Request = {
    test: any
  }
}
