const morgan = require("morgan");
const express = require("express");
const methodOverride = require("method-override");
const tradeRoutes = require('./routes/tradeRoutes')
const mainRoutes = require('./routes/mainRoutes')
const app = express();

let port = 8080;
let host = "localhost";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use('/', mainRoutes)
app.use("/trading", tradeRoutes);

app.use((req,res,next)=>{
  let err = new Error('Server cannot locate given url : '+req.url)
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  if(!err.status){
    console.log(err.stack)
    err.status = 500
    err.message = "Internal Server Error"
  }
  res.status = err.status
  res.render('error',{error:err})
});

app.listen(port, host, () => {
  console.log("Server started at port no : ", port);
});
