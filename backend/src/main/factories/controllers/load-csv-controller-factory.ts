import { LoadCSVController } from '../../../presentation/controllers/load-csv-controller'
import { type Controller } from '../../../presentation/protocols/controller'

export const makeLoadCSVController = (): Controller => {
  return new LoadCSVController()
}
