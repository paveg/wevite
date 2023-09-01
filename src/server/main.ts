import express from "express";
import cors from 'cors';
import ViteExpress from "vite-express";
import IceBreakers from './icebreakers.json';

const app = express();

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options))

app.get("/api/p/icebreaker", (_, res) => {
  const icebreaker = IceBreakers[Math.floor(Math.random() * IceBreakers.length)];
  res.send({ icebreaker: icebreaker });
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
