import Server from './src/server.js';
// utilizo dotenv
import dotenv from 'dotenv';
dotenv.config();

const server = new Server();

server.execute();