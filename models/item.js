const {DateTime} = require('luxon')
const {v4:uuidv4} = require('uuid')

const trading = [
        {
            id : '1',
            title : 'Nike',
            category : 'Sneakers',
            details : 'Air Jordan is a line of basketball shoes and athletic apparel produced by American corporation Nike, Inc. The first Air Jordan shoe was produced for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls in late 1984 and released to the public on April 1, 1985',
            status : 'Trading done',
            image : 'https://static.nike.com/a/images/t_default/e8aa7537-5848-4418-9ab4-1ff9cc27c17c/pegasus-37-mens-road-running-shoes-KLvDcj.png',
        },
        {
            id : '2',
            title : 'Adidas',
            category : 'Sneakers',
            details : 'Choose adidas shoes that provide ample support and cushioning or minimal construction for ultimate flexibility. Select footwear that fits your sport',
            status : 'Trading not done',
            image : 'https://images.journeys.com/images/products/1_595960_FS_THERO.JPG',
        },
        {
            id : '3',
            title : 'Van heusen',
            category : 'Formals',
            details : 'Known for revolutionary style since 1921, Van Heusen meets the needs of the modern professional with stylish and innovative classics. Van Heusen wants to ensure that uncomfortable fashion is a thing of the past.',
            status : 'Trading done',
            image : 'https://m.media-amazon.com/images/I/81wo+kVZ2ZL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id : '4',
            title : 'Hush puppies',
            category : 'Formals',
            details : 'Hush Puppies is an American internationally marketed brand of contemporary, casual footwear for men, women and children.',
            status : 'Trading done',
            image : 'https://marvel-b1-cdn.bc0a.com/f00000000114841/www.florsheim.com/styleguide/resources/images/about/styleTips/Q27/27header.jpg',
        },
        {
            id : '5',
            title : 'Puma',
            category : 'Sneakers',
            details : 'PUMA is one of the worlds leading sports brands, designing, developing, selling and marketing footwear, apparel and accessories. For 70 years, PUMA has relentlessly pushed sport and culture forward by creating fast products for the worlds fastest athletes',
            status : 'Trading not done',
            image : 'https://images.puma.net/images/189875/03/sv02/fnd/PNA/.jpg',
        },
        {
            id : '6',
            title : 'BATA',
            category : 'Formals',
            details : 'The Company went public in 1973 when it changed its name to Bata India Limited. Today, Bata India has established itself as India largest footwear retailer. Its retail network of over 1375 stores gives it a reach / coverage that no other footwear company can match. The stores are present in good locations and can be found in all the metros, mini-metros and towns.',
            status : 'Trading not done',
            image : 'https://i.pinimg.com/originals/5d/ba/4d/5dba4de52a7d32ca8cebb18224fa48ec.jpg',
        },
]

exports.find = () => trading

exports.findById = id =>  trading.find(trade => trade.id === id)

exports.save = trade => {
    trade.id = uuidv4()
    trading.push(trade)
}

exports.updateById = (id,newtrade) => {
    let trade = trading.find(trade => trade.id === id)
    if(trade){
    trade.title = newtrade.title
    trade.details = newtrade.details
    trade.category = newtrade.category
    trade.status = newtrade.status
    trade.image = newtrade.image
    return true
    }
    else{
        return false
    }
}

exports.deleteById = (id) =>{
    let index = trading.findIndex(trade => trade.id === id)
    console.log(id,index)
    if(index !== -1){
        trading.splice(index,1)
        return true
    }
    else{
        return false
    }
}