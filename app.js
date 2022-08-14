let express = require("express");
let path = require("path")

let app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});