import { summarizeText } from '../src/services/summarize.service';

jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [{ message: { content: 'Nodejs is the best runtime for JS' } }]
        })
      }
    }
  }));
});

describe('summarizeText', () => {
  it('should return the summary from OpenAI', async () => {
    const summary = await summarizeText('What is nodejs?');
    expect(summary).toBe('Nodejs is the best runtime for JS');
  });
});