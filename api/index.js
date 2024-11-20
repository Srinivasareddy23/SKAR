import express from 'express';
import dbConnection from './src/utils/db.js';

const app = express();

dbConnection();


const PORT = 5000;

app.listen(PORT,()=>{
  console.log('server started at 5000')
});

