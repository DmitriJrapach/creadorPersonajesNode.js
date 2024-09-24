import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import __dirname from "./utils/fileDir.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import viewRouter from "./routes/viewRouter.js";
import userRouter from "./routes/userRouter.js";
import charRouter from "./routes/charRouter.js";
import raceRouter from "./routes/raceRouter.js";
import classRouter from "./routes/classRouter.js";


dotenv.config();
const app = express();

// Conexión a MongoDB
const uri = process.env.URI;

async function connectToMongoDB() {
    try {
        await mongoose.connect(uri);
        console.log('Conexión exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
}

connectToMongoDB();

// Configuración de Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Usa path.join para construir una ruta absoluta a la carpeta views
app.set("views", path.join(__dirname, "../views"));

//Middlewares
app.use(express.json());  // Asegúrate de incluir esto para poder leer JSON en el body de las solicitudes
app.use(express.urlencoded({ extended: true }));  // Si vas a trabajar con formularios
app.use(express.static(`${__dirname}/../../public`));



app.get('/', (req, res) => {
    res.render('index', { title: 'Index', layout: 'main' });
});

//Routers
app.use("/", viewRouter);
app.use("/api/users", userRouter);
app.use("/api/characters", charRouter);
app.use("/api/race", raceRouter);
app.use("/api/class", classRouter);

const port = process.env.PORT || 3000;  // Usa process.env.PORT si lo estás configurando
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
