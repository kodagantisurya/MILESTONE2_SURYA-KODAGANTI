const express = require('express')
const controller = require('../controllers/tradeController')
const router = express.Router()

//send all trades : /trades]

router.get('/',controller.index)

//send html page for creating new trades : /trades/new

router.get('/new', controller.new)

// //create new story : //post method : /trades

router.post('/',controller.create) 

// //send story  details  of story using id : /trades/:id

router.get('/:id', controller.show)

// //send html for editing an existing story : /trades/:id/edit

router.get('/:id/edit',controller.edit)

// //POST update the story using id : /trades/:id

router.put('/:id',controller.update) 

// //Delete update the story using id : /trades/:id
    
router.delete('/:id',controller.delete) 

// router.get('/about')

module.exports = router