import request from 'supertest';
import express from 'express';
import Snippet from '../src/models/snippet.model';
import * as summarizeService from '../src/services/summarize.service';
import { createSnippet, getSnippet, listSnippets } from '../src/controllers/snippet.controller';

jest.mock('../src/models/snippet.model');
jest.mock('../src/services/summarize.service');

const app = express();
app.use(express.json());
app.post('/snippets', createSnippet);
app.get('/snippets/:id', getSnippet);
app.get('/snippets', listSnippets);

describe('Snippet Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create and return a snippet', async () => {
    (summarizeService.summarizeText as jest.Mock).mockResolvedValue('summary');
    (Snippet.create as jest.Mock).mockResolvedValue({ _id: '1', text: 'text', summary: 'summary' });

    const res = await request(app).post('/snippets').send({ text: 'text' });

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ _id: '1', text: 'text', summary: 'summary' });
  });

  it('should return a snippet by ID', async () => {
    (Snippet.findById as jest.Mock).mockResolvedValue({ _id: '1', text: 'abc', summary: 'sum' });

    const res = await request(app).get('/snippets/1');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ _id: '1', text: 'abc', summary: 'sum' });
  });

  it('should return 404 if snippet is not found', async () => {
    (Snippet.findById as jest.Mock).mockResolvedValue(null);

    const res = await request(app).get('/snippets/123');

    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Not found');
  });

  it('should return all snippets', async () => {
    (Snippet.find as jest.Mock).mockResolvedValue([
      { _id: '1', text: 'a', summary: 'sa' },
      { _id: '2', text: 'b', summary: 'sb' }
    ]);

    const res = await request(app).get('/snippets');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { _id: '1', text: 'a', summary: 'sa' },
      { _id: '2', text: 'b', summary: 'sb' }
    ]);
  });
});