import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import path from 'path'
import uploadRoutes from './routes/uploadRoutes.js'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

dotenv.config()
connectDB()


const app = express()


app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

var server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)


var ws = require('websocket').server;
var http = require('http');
 
var usersCounter = 0;

var server2 = http.createServer().listen(7000);
var wsServer = new ws({httpServer: server2});
wsServer.on('request', function (request) {
    console.log('client connected, connected clients: '+ usersCounter);
        
    var connection = request.accept(null, request.origin);
    
    usersCounter++;
 
    connection.sendUTF(usersCounter);    
    
    connection.on('close', function (connection) {
        usersCounter--;
        console.log('client disconnected connected clients: '+ usersCounter);
    });
});



