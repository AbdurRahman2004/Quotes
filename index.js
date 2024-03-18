import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'));

const param = {
    params: {
        key : '0637f7067428b1775e41f161ef174410',
    }
}

app.get("/",async (req,res)=>{
try{
    
    const response = await axios.get("https://api.kanye.rest");
    
    const data = response.data.quote;
    
    res.render("index.ejs",{content : data});
}
catch(error){
    res.status(500).send("Something went wrong");
}
});

app.listen(port,()=>{
    console.log(`Your server is succesfully running on port ${port}`);
})