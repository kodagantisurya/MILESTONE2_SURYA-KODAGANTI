const model = require('../models/item')
exports.index = (req,res) =>{
    let trading = model.find()
    res.render('./trade/index',{trading})
}
exports.show = (req,res,next) => {
    let id = req.params.id
    let trade = model.findById(id)
    if(trade){
        return res.render('./trade/show',{trade})
    }else{
        let err = new Error('Unable to find trade with id:' + id)
        err.status = 404
        next(err)
    }
}
exports.new = (req,res) => {
    res.render('./trade/new')
}
exports.create = (req,res) => {

    let trade = req.body
    model.save(trade)
    res.redirect('/trading')
}


exports.edit =  (req,res,next) => {
    let id = req.params.id
    let trade = model.findById(id)
    if(trade){
        return res.render('./trade/edit',{trade}) 
    }
    else{
        let err = new Error('Unable to find trade with id:' + id)
        err.status = 404
        next(err)
    }
}

exports.update =(req,res,next) => {
    let trade = req.body
    console.log(trade)
    let id = req.params.id
    if(model.updateById(id,trade)){
        res.redirect('/trading/'+id)
    }
    else{
        
        let err = new Error('Unable to find trade with id:' + id)
        err.status = 404
        next(err)
    }
}

exports.delete = (req,res,next) => {
    let id = req.params.id
    if(model.deleteById(id)){
        res.redirect('/trading')
    }
    else{      
        let err_msg = new Error('Unable to find trade with id:' + id)
        err_msg.status = 404
        next(err_msg)
    }
}
