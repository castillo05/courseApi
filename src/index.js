import app from './app';
import db from './models';
import dotenv from 'dotenv';

dotenv.config();


(async()=>{
    try {
        await db.sequelize.authenticate();

        app.listen(3002,()=>{
            console.log('Server running ');
        })
       
    } catch (error) {
        console.log(error);
    }
})()