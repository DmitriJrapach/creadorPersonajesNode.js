import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import __dirname from "./utils/fileDir.js";  // Importas __dirname desde tu archivo personalizado

const app = express();

// Configuración de Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Usa path.join para construir una ruta absoluta a la carpeta views
app.set("views", path.join(__dirname, "../views"));

app.get('/', (req, res) => {
    res.render('home', { mensaje: '¡Hola Mundo con Handlebars!' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
