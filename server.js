const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const products = [
  {name:"กล่องสุ่มไอดี Free Fire", price:49, icon:"🎁"},
  {name:"กล่องสุ่มสกินปืน", price:69, icon:"🔫"},
  {name:"กล่องสุ่มวงล้อ", price:99, icon:"🎡"}
];

app.get("/", (req,res)=>res.render("home",{products}));
app.get("/product/:id",(req,res)=>res.render("product",{p:products[Number(req.params.id)] || products[0]}));
app.get("/login",(req,res)=>res.render("login"));
app.get("/register",(req,res)=>res.render("register"));
app.get("/admin",(req,res)=>res.render("admin"));
app.listen(process.env.PORT || 3000,()=>console.log("CEF-SHOP running"));
