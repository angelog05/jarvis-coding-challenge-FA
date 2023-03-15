import express, { Express } from "express";
const server: Express = express();
const cors = require("cors");

server.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
server.use(express.json());
export default server;
