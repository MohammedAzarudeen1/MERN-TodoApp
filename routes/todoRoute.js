const express = require('express')
const router = express.Router()
const {getTodo,postTudo,getOneTudo,updateTudo,deleteTudo} = require('../controllers/todoController')

router.get('/',getTodo)
router.post('/',postTudo)
router .put('/:id',updateTudo)
router .delete('/:id',deleteTudo)

router.get('/:id',getOneTudo)

module.exports = router