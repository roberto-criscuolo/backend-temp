import express from 'express'
import listAll from '../controllers/clima/listAll.js'
import getById from '../controllers/clima/getById.js'
import create from '../controllers/clima/create.js'
import update from '../controllers/clima/update.js'
import remove from '../controllers/clima/remove.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)


export default router