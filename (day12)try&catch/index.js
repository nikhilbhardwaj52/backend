const express = require("express")
const app= express();
const Auth=require("./middle/Auth");

const foodMenu = [
  // Starters
  { id: 1, name: "Tomato Soup", category: "Starter", price: 120, isVeg: true, ingredients: ["Tomato", "Cream", "Spices"] },
  { id: 2, name: "Spring Rolls", category: "Starter", price: 150, isVeg: true, ingredients: ["Cabbage", "Carrot", "Wrapper", "Sauce"] },
  { id: 3, name: "Chicken Tikka", category: "Starter", price: 220, isVeg: false, ingredients: ["Chicken", "Yogurt", "Spices"] },

  // Main Course
  { id: 4, name: "Paneer Butter Masala", category: "Main Course", price: 250, isVeg: true, ingredients: ["Paneer", "Tomato", "Cream", "Spices"] },
  { id: 5, name: "Chicken Biryani", category: "Main Course", price: 300, isVeg: false, ingredients: ["Chicken", "Rice", "Spices"] },
  { id: 6, name: "Veg Fried Rice", category: "Main Course", price: 200, isVeg: true, ingredients: ["Rice", "Vegetables", "Soy Sauce"] },
  { id: 7, name: "Butter Naan", category: "Main Course", price: 40, isVeg: true, ingredients: ["Flour", "Butter", "Yeast"] },
  { id: 8, name: "Dal Tadka", category: "Main Course", price: 180, isVeg: true, ingredients: ["Lentils", "Onion", "Spices"] },
  { id: 9, name: "Mutton Rogan Josh", category: "Main Course", price: 350, isVeg: false, ingredients: ["Mutton", "Onion", "Spices"] },

  // Desserts
  { id: 10, name: "Gulab Jamun", category: "Dessert", price: 90, isVeg: true, ingredients: ["Khoya", "Sugar", "Cardamom"] },
  { id: 11, name: "Ice Cream Sundae", category: "Dessert", price: 150, isVeg: true, ingredients: ["Ice Cream", "Chocolate Syrup", "Nuts"] },
  { id: 12, name: "Brownie with Ice Cream", category: "Dessert", price: 180, isVeg: true, ingredients: ["Brownie", "Ice Cream", "Chocolate Sauce"] },

  // Drinks
  { id: 13, name: "Mango Shake", category: "Drink", price: 130, isVeg: true, ingredients: ["Mango", "Milk", "Sugar"] },
  { id: 14, name: "Cold Coffee", category: "Drink", price: 120, isVeg: true, ingredients: ["Coffee", "Milk", "Sugar", "Ice"] },
  { id: 15, name: "Fresh Lime Soda", category: "Drink", price: 90, isVeg: true, ingredients: ["Lemon", "Soda", "Sugar/Salt"] }
];
  

const addtocart=[];

app.use(express.json());

app.use("/admin",Auth);

app.get("/admin",(req,res)=>{
    res.send(foodMenu);
})


app.post("/admin",(req,res)=>{
foodMenu.push(req.body);
res.send("added")
})

app.delete("/admin/:id",(req,res)=>{
const id2=parseInt(req.params.id)
const i=foodMenu.findIndex(info=>info.id==id2)
if(i==-1)
{ res.status(400).send("bad request"); }
else{foodMenu.splice(i,1);
res.send("delete done") }
})
//status code -http status codes are 3 digit reponses from a server indicating the outcome of client's request


 app.patch("/admin",(req,res)=>{
 const id2= req.body.id;
        const fod =foodMenu.find(info=>info.id==id2)
        if(fod)
        {
           fod.name=req.body.name;
           res.send("done");

        } 
 })

 app.post("/user/:id",(req,res)=>{

       try{
        const idd=parseInt(req.params.id)
        const fode=foodMenu.find(index=>index.id==idd)
        addtocart.push(fode);
        res.send("item add to cart");
       }
       catch(err){
        res.send("item not added");

       }
        
 })

 app.get("/user",(req,res)=>{
    try{
         
         res.send(addtocart);
         
       
     }
     catch(err)
     {
       console.log("nO addtocart")
     }
 })

 app.delete("/user/:id",(req,res)=>{
  
        const idd=parseInt(req.params.id)
        const idt=addtocart.findIndex(info=>info.id==idd)
        if(idt==-1)
        {
          res.send("item not present");
        }
        addtocart.splice(idt,1);
        res.send("item removed")

    
 })
app.listen(3000,()=>{
    console.log("server running at 3000");
})


