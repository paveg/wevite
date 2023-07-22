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

app.get("/api/p/users", (_, res) => {
  res.send({ users: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }] });
});

app.get("/api/p/users/:id", (req, res) => {
  res.send({ user: { id: req.params.id, name: "John" } })
})

app.get("/api/p/icebreakers", (_, res) => {
  res.send({ icebreakers: IceBreakers });
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
