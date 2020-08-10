import db from '../models';
import bcrypt from 'bcrypt';

const createStudents= async()=>{

    const {name,lastName,age,email,password,id_course}=req.body;

    db.findAll({
        where:{
            email:email
        }
    }).then(student=>{
        if(student.length>=1) return res.status(200).send({message:'Lo sentimos este Email ya esta registrado'});

        if(password==='') return res.status(200).send({message:'Introduzca la contraseña'});

        bcrypt.hash(password,10).then(hash=>{
            db.students.create({
                name:name,
                lastName:lastName,
                age:age,
                email:email,
                password:hash,
                id_course:id_course
            }).then(student=>{
                res.status(200).send({student:student});
            }).catch(error=>{
                console.log(error);
            })
        }).catch(error=>{
            console.log(error)
        })
    }).catch(error=>{
        console.log(error)
    })
}

module.exports={ 
    createStudents
}