import {Router} from "express"
import cookieParser from "cookie-parser"
import session from "express-session"

const router=Router()
router.get('/',(req,res)=>{
    console.log(req.signedCookies)
    // res.cookie("user","kamal",{maxAge:60000,signed:true})
    res.json({msg:"json works"})
})
export default router