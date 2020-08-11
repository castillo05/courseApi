import db from '../models';
import bcrypt from 'bcrypt';

const createStudents= async(req,res)=>{

    const {name,lastName,age,email,password}=req.body;

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
                res.status(200).send({student: students});
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

        const student= await db.students.findByPk(id);

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

module.exports={ 
    createStudents,
    login,
    getstudent,
    getStudents
}