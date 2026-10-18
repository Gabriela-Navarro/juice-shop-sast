import { type Request, type Response, type NextFunction } from 'express'
import * as models from '../models/index'

export function buscarUsuario () {
  return (req: Request, res: Response, next: NextFunction) => {
    const nombre = req.query.nombre ?? ''
    models.sequelize.query(`SELECT * FROM Users WHERE username = '${nombre}'`)
      .then(([usuarios]: any) => {
        res.json(usuarios)
      }).catch((error: Error) => {
        next(error)
      })
  }
}