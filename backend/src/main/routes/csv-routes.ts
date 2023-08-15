import { type Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadCSVController } from '../factories/controllers/load-csv-controller-factory'
import { makeUploadCSVController } from '../factories/controllers/upload-csv-controller-factory'
import multer from 'multer'

export default (router: Router): void => {
  const storage = multer.memoryStorage()
  const upload = multer({ storage })
  router.get('/users', adaptRoute(makeLoadCSVController()))
  router.post('/files', upload.single('file'), adaptRoute(makeUploadCSVController()))
}
