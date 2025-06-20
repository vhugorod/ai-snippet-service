import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function summarizeText(text: string): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: `Summarize in ~30 words:\n\n${text}` }
    ],
    max_tokens: 60,
  });

  return completion.choices[0].message.content || '';
}
