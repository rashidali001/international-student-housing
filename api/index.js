import express from 'express';

const app = express();
app.use(express.json()); // Middleware


//listens to port 3000
app.listen("3000", ()=>{
    console.log("App running on port 3000!");
})
