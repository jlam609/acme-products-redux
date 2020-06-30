const {seed, db, Product} = require('./db')
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../public')))

app.get(`/api/products`, async(req,res) => {
    const products = await Product.findAll()
    res.send({
        products
    })
})

app.post('/api/products', async(req,res) => {
    try{
    const {name} = req.body
    const product = Product.create({
        name:name
    })
    res.send({
        message:`${name} has been created!`
    })
    }
    catch(e){
        console.error(e)
    }
})

app.put('/api/products/:id', async(req,res) => {
    try{
        const id = req.params.id
        const {name} = req.body
        if (typeof name !== 'string' || !id.length) {
            return res.send({
            message:`${name} must be a string`
        })}
        const product = await Product.findByPK(id)
        product.name = name
        res.send({
           message: `${product} has been updated`
        })
    }
    catch(e){
        console.error(e)
    }
})

app.delete('/api/products/:id', async(req,res) => {
    try{
        const id = req.params.id
        await Product.destroy({
            where:{
                id:id
            }
        })
        res.send({
           message: `${id} has been removed`
        })
    }
    catch(e){
        console.error(e)
    }
})
seed(force = true)
.then(() => app.listen(port, () => console.log(`listening on ${port}`)))
.catch(e => console.error('problem with server', e))

