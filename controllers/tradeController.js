const model = require('../models/item')
exports.index = (req,res,next) =>{
    model.find()
    .then(trading =>res.render('./trade/index',{trading}))
    .catch(err => next(err))
}
exports.show = (req,res,next) => {
    let id = req.params.id
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let err = new Error('Invalid trade id')
        err.status =400
        return next(err)
    }
    model.findById(id)
    .then( trade =>{
        if(trade) {
            return res.render('./trade/show',{trade})
    }
    else {
        let err = new Error('Unable to find trade with id:' + id);
        err.status = 404;
        next(err);
        }
    })
    .catch(err => next(err))
}
exports.new = (req,res) => {
    res.render('./trade/new')
}
exports.create = (req,res,next) => {
    let trade = new model(req.body)
    trade.save(trade)
    .then((trade) => {
        res.redirect('/trading')      
    })
    .catch(err => {
        if(err.name === 'ValidationError'){
            err.status = 400
        }
        next(err)
    })
}


exports.edit =  (req,res,next) => {
    let id = req.params.id
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let err = new Error('Invalid trade id')
        err.status =400
        return next(err)
    }
    model.findById(id)
    .then( trade =>{
        if(trade) {
            return res.render('./trade/edit',{trade})
        } 
        else {
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err))
}

exports.update =(req,res,next) => {
    let trade = req.body
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let err = new Error('Invalid trade id')
        err.status =400
        return next(err)
    }
    model.findByIdAndUpdate(id,trade, {useFindAndModify:false, runValidators : true})
    .then(trade => {
        if(trade){
            res.redirect('/trading/'+id)
        }
        else{
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => {
        if(err.name === 'ValidationError')
            err.status = 400
        next(err)
    })
}

exports.delete = (req,res,next) => {
    let id = req.params.id
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let err = new Error('Invalid trade id')
        err.status =400
        return next(err)
    }
    model.findByIdAndDelete(id,{useFindAndModify:false})
    .then(trade => {
        if(trade){        
            res.redirect('/trading')
        }
        else{
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err))
}
