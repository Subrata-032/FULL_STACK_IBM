require('dotenv').config();
const express = require('express');
const cors=require('cors');
const {connectDB} = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const {protect} = require('./middleware/authMiddleware');
const { productRoute } = require('./routes/products.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

//app.use('cors');
app.use('/api/products',productRoute);

// app.get("/",(req,res)=>{
//     res.status(200).send("wellcome to server")
// })

app.get('/api/protected', protect, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// app.get("/protected",(req,res)=>{
//     res.render("Authentication");
// })

const PORT = 8080;

app.listen(PORT, async()=>{
    try {
        await connectDB
        console.log("DB is connected");
        console.log(`Server is running at http://localhost:${PORT}`);
    } catch (error) {
    console.log(error.message);
    }
});