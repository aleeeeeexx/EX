import express from "express";
import supabaseService from "./supabaseService.js";


const app = express();

const PUBLIC_DIR = "public";
app.use(express.static(PUBLIC_DIR));



app.get("/id", (req, res) => { 
    
  })
  
  app.post("/create", async (req, res) => {
    if (!req.body?.name ) {
      let error = {
        status: "error",
        message: "Не хватает данных",
      };
      res.statusCode = 400;
      res.send(error);
      return;
    }
  
    let name = {
      name: req.body.name,
      
    };
    let data = await supabaseService.addModel(name);
  
    let answer = {
      status: "ok",
      data
    };
  
    res.statusCode = 200;
    res.send(answer);
  });
  





const PORT = 5500;
app.listen(PORT, ()=> {
console.log(`Сервер работает на порте ${PORT}`);
console.log("Сервер запущен http://localhost:5500");
});