import { UploadCSVController } from '../../../presentation/controllers/upload-csv-controller'
import { type Controller } from '../../../presentation/protocols/controller'

export const makeUploadCSVController = (): Controller => {
  return new UploadCSVController()
}
