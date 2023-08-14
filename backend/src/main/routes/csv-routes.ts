import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/users', (req, res) => {
    res.json({ ok: 'ok' })
  })

  router.post('/files', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
