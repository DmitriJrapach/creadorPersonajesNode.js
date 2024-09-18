import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import __dirname from "./utils/fileDir.js";  // Importas __dirname desde tu archivo personalizado
import viewRouter from "./routes/viewRouter.js";
import userRouter from "./routes/userRouter.js";
import charRouter from "./routes/charRouter.js";

const app = express();

// Configuración de Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Usa path.join para construir una ruta absoluta a la carpeta views
app.set("views", path.join(__dirname, "../views"));

//Middlewares
app.use(express.static(`${__dirname}/../../public`));


app.get('/', (req, res) => {
    res.render('index', { title: 'Index', layout: 'main' });
});

//Routers
app.use("/", viewRouter);
app.use("api/users", userRouter);
app.use("api/characters", charRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
