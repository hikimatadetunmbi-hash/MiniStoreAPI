const express = require("express");
const app = express();
app.use(express.json());
//app.get("/" , (req,res)=> {
  //  res.send("Hello World");
//});

let products= [
  {
    id: 1,
    name:"Adire Bubu Gown",
    description: "A beautiful adire bubu gown made with a comfortable fabric, suitable for causal and special occasion.",
    price: 40000,
    category: "Clothing",
    quantity: 10,
    image: "bubu-gown.jpg"

  },

  {
    id: 2,
    name: "Ankara Bubu Gown",
    description: "A beautiful ankara bubu with vibrant colors, perfect for any occasion.",
    price: 50000,
    category: "Clothing",
    quantity: 10,
    image: "ankara bubu-gowm.jpg"
  },

  {
    id: 3,
    name: "Cow-Neck Lace-Edged Bubu",
    description: "Elegant cow-neck bubu with delicate lace details for a classy look.",
    price: 30000,
    category: "Clothing",
    qauntity: 8,
    image: "cow-neck bubu.jpg"

  },

  {
    id: 4,
    name: "Two-Piece Damask Bubu Set",
    description: "A Luxurious two-piece outfit featuring a rich patterned damask flowing Bubu gown paired with plain material underneath.",
    price: 50000,
    category: "Clothing",
    quantity: 5,
    image: "two-piece bubu.jpg"
  },

  {
    id: 6,
    name: "High-Heel shoes",
    description: "Elegant high-heel shoes suitable for special occasions.",
    price: 30000,
    category: "Footwear", 
    quantity: 5,
    image: "high-heels.jpg"
  },

  {
    id: 7,
    name: "Silk Scarf",
    description: "A beautiful slik scarf that adds a stylish touch to any outfit.",
    price: 4500,
    category: "Accessories",
    quantity: 20,
    image: "silk-scarf.jpg"
  }
];

app.get("/products", (req,res)=>{
  res.send(products);
});

app.get("/products/:id", (req,res)=>{
  const productId = Number(req.params.id);
  const product = products.find(p => Number(p.id) === productId);
  res.send(product);
});

app.post("/products", (req,res)=> {
  const newProduct = req.body;
  products.push(newProduct);
  res.send(newProduct);
});

app.put("/products/:id", (req,res)=> {
  const productId = Number(req.params.id);
  const productIndex = products.findIndex(p=> Number(p.id) === productId);

  if(productIndex ===-1) {
    res.send("Product not found");
  }
  else{
    products[productIndex]= req.body;
    res.send(products[productIndex]);

  }
});

app.delete("/products/:id", (req,res)=> {
  const productId = Number(req.params.id);
  const productIndex = products.findIndex(p=> Number(p.id) === productId);

  if(productIndex ===-1){
    res.send("Product not found");
  }
  else{
    products.splice(productIndex, 1)
    res.send("Product deleted successfully");
  }
});

app.get("/products/category/:category", (req,res)=>{
const category =req.params.category;
const filteredProducts =products.filter(p=> p.category === category);
res.send(filteredProducts);
});

app.listen(process.env.port||3000, ()=>{
    console.log("Server running at http://localhost:3000");
});