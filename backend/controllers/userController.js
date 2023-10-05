const asyncHandler = require("express-async-handler")     
//@desc Register a user
//@route POST /api/users/register
//@acess public

const registerUser = asyncHandler(async  (req, res) =>{
    res.json({mes: "reg user"});
});

//@desc Login user
//@route POST /api/users/login
//@acess public
const loginUser = asyncHandler( async (req,res)=>{
    res.json({mes: "loginUser"});
});

//@desc Current user info
//@route GET /api/users/current
//@acess private
const currentUser =  asyncHandler( async (req, res)=>{
    res.json({mes: "Current user info"});
})


module.exports ={registerUser, loginUser, currentUser};