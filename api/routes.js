const express = require('express');
const app = express()
const router = express.Router()
const signUpTemplate = require('../model/routesModel')

router.post('/signup', (request, response)=>{
    const createdUser = new signUpTemplate({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,

    })

    createdUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router   //exporting router to make it accessible to others