import { Express } from "express";
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary'

import { Configuration, OpenAIApi } from 'openai'

dotenv.config();

const router = express.Routes();