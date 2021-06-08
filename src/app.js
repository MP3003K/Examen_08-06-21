import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import productoRoutes from './routes/producto.routes'
import ventaRoutes from './routes/venta.routes'
import detalleRoutes from './routes/detalle.routes'

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/',function(req, res, next){
    res.send('Bienvenido a Node JS...!');
});
app.use('/api/auth', authRoutes);
app.use('/api/auth/users', userRoutes);
app.use('/api/auth/productos',productoRoutes);
app.use('/api/auth/ventas',ventaRoutes);
app.use('/api/auth/detalles',detalleRoutes);
export default app;