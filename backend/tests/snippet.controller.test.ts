import request from 'supertest';
import express from 'express';
import Snippet from '../src/models/snippet.model';
import * as summarizeService from '../src/services/summarize.service';
import { createSnippet } from '../src/controllers/snippet.controller';

jest.mock('../src/models/snippet.model');
jest.mock('../src/services/summarize.service');

const app = express();
app.use(express.json());
app.post('/snippets', createSnippet);

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


});