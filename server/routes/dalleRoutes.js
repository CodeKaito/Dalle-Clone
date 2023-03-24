import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai'

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
})

const openai = new OpenAIApi(configuration)

router.get('/').get((req,res) => {
    res.send('Hello from Dall-e')
})

export default router;