import express from 'express';
import {
  createSnippet,
  getSnippet,
} from '../controllers/snippet.controller';

const router = express.Router();

router.post('/', createSnippet);
router.get('/:id', getSnippet);

export default router;
