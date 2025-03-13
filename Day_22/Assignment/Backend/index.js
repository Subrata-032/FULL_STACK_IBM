const express = require('express'); 
const products = require("./data");
const app = express(); 
const PORT = 3000; 
app.use(express.json()); 
const crypto = require('crypto'); 
const generateId = () => crypto.randomUUID();

app.get("/",(req,res)=>{
    res.send("Welcome to Store");
})
app.get("/products",(req,res)=>{
    res.status(200).send(products)
})
//get id of product
app.get("/products/:id",(req,res)=>{
    const product=products.find((product)=>product.id==req.params.id);
    if (product) {
        res.json(product);
      } else {
        res.status(404).send({ error: "Product not found" });
        
      }
});
// add product
app.post("/products",(req,res)=>{
    const { title, price, category } = req.body; 
    if (!title || !price || !category) { 
       return res.status(400).json({ message: 'All fields are required' }); 

}
const newProduct = { 
     id: crypto.randomUUID(),
    title, 
    price, 
    category 
    }; 
    products.push(newProduct);
  res.status(201).json(newProduct);
})

//delete product
app.delete('/products/:id', (req, res) => { 
    const { id } = req.params; 
    const updatedProducts = products.filter(p => p.id !== id); 
    if (updatedProducts.length === products.length) { 
    return res.status(404).json({ message: 'Product not found' }); 
    }
    res.json({ message: 'Product deleted successfully' });

});
app.listen(PORT, () => { 
console.log(`Server is running on http://localhost:${PORT}`); 
});