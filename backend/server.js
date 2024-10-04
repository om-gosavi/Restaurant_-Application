import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";

app.listen(process.env.PORT,()=>{
    //dbConnection();
    console.log(`server running on Port ${process.env.PORT}`);
})