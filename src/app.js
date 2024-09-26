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
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'; // Para permitir acceso a propiedades heredadas
import Handlebars from 'handlebars'; // Importa Handlebars para manipular la configuración

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

// Configuración de Handlebars con acceso a propiedades del prototipo
app.engine("handlebars", engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars), // Permite acceso a propiedades heredadas
    layoutsDir: path.join(__dirname, "../views/layouts"), // Ruta a tus layouts
    defaultLayout: "main", // Layout principal
}));

// Configuración de la carpeta de vistas
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));

// Middlewares
app.use(express.json());  // Para leer JSON en el body de las solicitudes
app.use(express.urlencoded({ extended: true }));  // Para manejar formularios
app.use(express.static(path.join(__dirname, "../../public")));  // Archivos estáticos

// Ruta raíz
app.get('/', (req, res) => {
    res.render('index', { title: 'Index', layout: 'main' });
});

// Routers
app.use("/", viewRouter);
app.use("/api/users", userRouter);
app.use("/api/characters", charRouter);
app.use("/api/race", raceRouter);
app.use("/api/class", classRouter);

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
