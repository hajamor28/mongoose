const express = require ('express')
const router = express.Router()
const User = require('../models/usermodals')


//add New user 
//@POST 

router.post('/',async (req , res)=> {


const newUser = await User.create(req.body)
res.json(newUser)
})
 // GET Users 
 //@Get
 router.get ('/', async (rec, res)=>{
try {
    const users = await user.find({})
    res.json (users)
} catch (error) {
    console.log(error)
}

 })

//Update user 

router.put ('/:id ', async (req , res) =>{
    try {
        const Updateuser= await user.findByIDandUpdate (req.params.id , req.body)

        res.json(Updtaeuser)
    } catch (error) {
        console.log(error)
        
    }
})






module.exports = router
