import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json()); // Middleware


try {
    mongoose.connect("mongodb+srv://rashid:rashid@cluster0.kc9sh7q.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database successfully conected");
    
} catch (e) {
    console.log(e);
}

//listens to port 3000
app.listen("3000", ()=>{
    console.log("App running on port 3000!");
})

