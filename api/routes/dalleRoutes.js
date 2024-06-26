import express from "express";

import * as dotenv from "dotenv";
import openai from "openai";

import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openaiApi = new openai.OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from dall-e");
});

export default router;
