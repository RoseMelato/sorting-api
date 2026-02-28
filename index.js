const express = require("express");
const cors = require("cors");
const app = express();

//enable cors for all origins
app.use(cors());

//Middleware to read JSON
app.use(express.json());


//POST endpoint
app.post("/sort-word", (req,res)=>{
    const data = req.body?.data;
    
    //Validation
    if(!data || typeof data != "string"){
        return res,status(400).json({
            error: "Invalid input. 'data' must be a string"
    });}
    
    //convert string to array
    const sortedChar = data
        .split("")
    //sort alaphabetically
        .sort((a,b)=> a.localeCompare(b));

    //Response
        res.json({word: sortedChar});
});

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});