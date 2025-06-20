import express from 'express';
import {
  createSnippet,
} from '../controllers/snippet.controller';

const router = express.Router();

router.post('/', createSnippet);

export default router;
