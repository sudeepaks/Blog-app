const express = require('express');

const app = express();



app.post("/blogs", (req, res) => {

})

app.get("/blogs", (req, res) => {

})

app.get("/blogs/:id", (req, res) =>{

})

app.patch("/blogs/:id", (req, res) =>{

})

app.delete("/blogs/:id", (req, res) =>{

})

app.listen(3000, () => {
    console.log("Server Started")
})