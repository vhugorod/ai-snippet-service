import { Request, Response } from 'express';
import Snippet from '../models/snippet.model';
import { summarizeText } from '../services/summarize.service';

export const createSnippet = async (req: Request, res: Response): Promise<void> => {
  try {
    const { text } = req.body;
    const summary = await summarizeText(text);
    const snippet = await Snippet.create({ text, summary });
    res.status(201).json(snippet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create snippet', details: err });
  }
};

