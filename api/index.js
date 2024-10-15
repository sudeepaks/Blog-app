import express from "express";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import cookieParser from "cookie-parser";
import multer from "multer";


const app = express();

app.use(express.json())
app.use(cookieParser())

const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('file'), function (req, res, next) {
res.status(200).json("Image has been uploaded")   
} )

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, ()=>{
    console.log("connected")
})