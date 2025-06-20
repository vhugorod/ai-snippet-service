import Snippet from '../src/models/snippet.model';

describe('Snippet Model', () => {
  it('should require text and summary', async () => {
    const snippet = new Snippet({});
    let err;
    try {
      await snippet.validate();
    } catch (e) {
      err = e as any;
    }
    expect(err).toBeDefined();
    expect(err.errors.text).toBeDefined();
    expect(err.errors.summary).toBeDefined();
  });

  it('should save with valid fields', async () => {
    const snippet = new Snippet({ text: 'nodejs is the best', summary: 'nodeds is a runtime' });
    expect(snippet.text).toBe('nodejs is the best');
    expect(snippet.summary).toBe('nodeds is a runtime');
  });
});