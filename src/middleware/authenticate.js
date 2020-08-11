import jwt from 'jsonwebtoken';

const secret='jcdeveloper';

exports.authorization=(req,res,next)=>{
    if(!req.headers.authorization) return res.status(403).send({message:'La peticion no tiene la cabecera de autenticacion'});

    var token = req.headers.authorization.replace(/['"]+/g,'');

    try {
        jwt.verify(token,secret,(err,decode)=>{
            if(err) return res.status(401).send({message:err})

            req.user=decode;

            next();
        })
    } catch (error) {
        console.log(error)
    }
}