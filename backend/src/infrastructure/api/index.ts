import dotenv from 'dotenv';
import server from './server';
import ExampleRoute from './routes/ExampleRoute';
import gifRoute from "./routes/gif-route";

dotenv.config();
const port = process.env.PORT || 8080;

const example = new ExampleRoute();
const gif = new gifRoute();


server.use(example.execute());
server.use(gif.execute());

server.listen(port, () => {
  console.info(`[INFO] Server running at port ${port}`);
});