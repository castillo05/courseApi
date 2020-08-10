import express from 'express';

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json);

//configurar cabeceras http
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY,Origin,X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/api',(req,res)=>{
    res.json({message:'Welcome to Api'});
});


module.exports=app;