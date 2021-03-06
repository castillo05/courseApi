import express from 'express';
import route from './routes/index'
import path from 'path';
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//configurar cabeceras http
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY,Origin,X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
	next();
});



app.get('/api',(req,res)=>{
    res.status(200).send({message:'Welcome to Api'});
});

//Cargamos una ruta estatica que es la carpeta client
app.use('/',express.static('dist/client',{redirect:false}));

app.use('/api',route);

app.get('*',function (req,res,next) {
	res.sendFile(path.resolve('dist/client/index.html'));
	
	 });

module.exports=app;