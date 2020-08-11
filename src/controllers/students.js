import db from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createStudents= async(req,res)=>{

    const {name,lastName,age,email,password}=req.body;

    if(name==='' || lastName==='' || age==='' || email==='' || password==='') return res.status(200).send({message:'Complete todos los campos'})

    db.students.findAll({
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
                password:hash
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

const login= async (req, res) => {
   try {
        const {email,password}= req.body;
        

        const students= await db.students.findOne({
            where:{
                email:email
            }
        });

        if(students=== null){
            res.status(200).send({message:'Usuario no existe'});
        }else{
            const pass= await bcrypt.compare(password,students.password)

            if(pass){
                let token=jwt.sign({
                    user:{
                        id:students.id,
                        name:students.name,
                        email:students.email
                    }

                },'jcdeveloper',{expiresIn:60*60});
                req.body.gethash ?
                res.status(200).send({token:token})
                :
                res.status(200).send({student: students})
            }else{
                res.status(200).send({message:'Contraseña Incorrecta'});
            }
           
        }
   } catch (error) {
       console.log(error)
   }
}

const getstudent= async(req, res)=>{
    try {
        const id=req.params.id;

        const student= await db.students.findByPk(id,{
            include:[
                {   
                    model:db.courses,
                    as:'courses'
                }
                
            ]
        });

        if(student){
            res.status(200).send({student:student});
        }else{
            res.status(200).send({message:'Este usuario no existe'});
        }
    } catch (error) {
        console.log(error)
    }
}

const getStudents = async (req, res) => {
    try {
        const students= await db.students.findAll();

        students ? res.status(200).send({students:students}) : res.status(200).send({message:'Ocurrio un error al listar los estudiantes'});
    } catch (error) {
        console.log(error)
    }
}

const updateStudent= async (req, res) => {
    try {
        const id = req.params.id;

        const {name,email,lastName}= req.body;

        if(name==='' || lastName==='' || email==='') return res.status(200).send({message:'Favor escriba la información que desea actualizar'})

        const update= await db.students.update({
            name:name,
            email:email,
            lastName: lastName
        },{
            where: {
                id: id
            }
        })

        if(update){
            res.status(200).send({message:'Actualizado con exito'})
        }else{
            res.status(200).send({message:'Lo sentimos no se puede actualizar'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports={ 
    createStudents,
    login,
    getstudent,
    getStudents,
    updateStudent
}