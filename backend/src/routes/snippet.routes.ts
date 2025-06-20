import express from 'express';
import {
  createSnippet,
  getSnippet,
  listSnippets
} from '../controllers/snippet.controller';

const router = express.Router();

router.post('/', createSnippet);
router.get('/', listSnippets);
router.get('/:id', getSnippet);

export default router;
