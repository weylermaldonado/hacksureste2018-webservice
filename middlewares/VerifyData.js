//dependencies
const express = require('express')
const bodyParser =  require('body-parser')


//intialize
const app = new express()


//express middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//custom middlewares
let VerifyData = (req,resp, next) => {

    let speed =  req.body.speed
    let streets = [
        {name: 'calle 60', maxspeed: 40},
        {name: 'calle 21', maxspeed: 40},
        {name: 'calle 19', maxspeed: 40}
    ]

    if (speed > streets[1].maxspeed){
        return resp.json({
            status: 'warning',
            message: 'Velocidad más de la máxima'
        })
    }
    return resp.json({
            status: 'good',
            message: 'Velocidad correcta'
        })
    

    next()

}


module.exports = {
    VerifyData
}