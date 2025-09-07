require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const app = express();
const port = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();


app.use(express.json());

// Importar rutas
const generoRoutes = require('./routes/genero');
const directorRoutes = require('./routes/director');
const productoraRoutes = require('./routes/productora');
const tipoRoutes = require('./routes/tipo');
const mediaRoutes = require('./routes/media');
app.use('/api/generos', generoRoutes);
app.use('/api/directores', directorRoutes);
app.use('/api/productoras', productoraRoutes);
app.use('/api/tipos', tipoRoutes);
app.use('/api/medias', mediaRoutes);

app.get('/', (req, res) => {
  res.send('API REST Películas - Backend');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
