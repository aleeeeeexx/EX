import express from "express";


const app = express();

const PUBLIC_DIR = "public";
app.use(express.static(PUBLIC_DIR));

app.get("/:id", (req, res) => { 
    let id = Number(req.params["id"]); 
    
    
    if (!id) {
      let error = {
        status: "error",
        message: "Неверный ID",
      };
      res.statusCode = 400;
      res.send(error);
      return;
    }
  
    let answer = {
      status: "ok",
      message: `Модель '${id}'`
    }
    
    res.statusCode = 400;
    res.send(answer);
  })
  
  app.post("/create", async (req, res) => {
    if (!req.body.name ) {
      let error = {
        status: "error",
        message: "Не хватает данных",
      };
      res.statusCode = 400;
      res.send(error);
      return;
    }
  
    let model = {
      name: req.body.name
    };
  
   // let data = await supabaseService.addModel(model);
  
   // if (!data) {
    //  let error = {
    //    status: "error",
    //    message: "Ошибка при добавлении в базу данных",
    //  };
   //   res.statusCode = 400;
   //   res.send(error);
   //   return;
  //  }
  
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