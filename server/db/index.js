const Product = require('./product')
const db = require('./db')

const productList = ['food', 'bar', 'fas']
const seed = async (force = false)=>{
    try{
        await db.sync({force})
        if (force == true) {
            productList.forEach(product => Product.create({
            name:product
        }))
        }   
        console.log('seed success!')
    }
    catch(e){
        console.error('seeding error', e)
    }
}

module.exports = {
    db,
    seed,
    Product
}