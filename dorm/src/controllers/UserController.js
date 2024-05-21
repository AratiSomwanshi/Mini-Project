import { USER_TABLE_NAME } from "./constants/DbConstants.js";
import { connection } from "./utility/DbUtil.js";




export const Login= (req,res)=>{
    const {username,password} = req.body;
    const query = `select * from ${USER_TABLE_NAME} where username= ? AND password=?`;
    
    
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.err('Database err:', err);
            res.status(500).json({ message: 'Database error' });
        } else if (results.length > 0) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
}
export const SignUp = (req,res)=>{
    const {username,password,email} = req.body; // {id:105,name:'',phone:'',marks:55}
    const query = `insert into ${USER_TABLE_NAME} values(${username},'${password}',${email}')`
    db.query(query,(err,result)=>{
        if (err) {
            console.log(err);
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            console.log(result);
            res.status(200).send({message:'User Inserted'});
        }
    });
}




export const removeUser = (req,res) => {
    const query= `delete from ${USER_TABLE_NAME} where username=${req.params.username}`;
    db.query(query,(err,result)=>{
        if(err){
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            res.status(200).send({message:'user removed !'});
        }
    });}
    export const updateUser= (req,res) => {
        const {email,password} = req.body;
        const query = `update ${USER_TABLE_NAME} set  email='${email}', password='${password}' where username=${req.params.username}`
        connection.query(query,(err,result)=>{
            if(err){
                res.status(500).send({message:'Something went wrong'});
            }
            else{
                res.status(200).send({message:'user updated !'});
            }
        });}
        