import {db} from "../db"

export const register = (req,res)=>{

    //CHECK EXISTIN SER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q,[req.body.email, req.body.name], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("sers already exist")

       //HASh the password and create ser
       const salt = bcrypt.genSaltSync
        const hash = bcrypt.hashSync(req.body.password, salt)
    })
}   

export const login = (req,res)=>{

}

export const logout = (req,res)=>{

}
