import { Schema, model } from 'mongoose';

const SnippetSchema = new Schema({
  text: { type: String, required: true },
  summary: { type: String, required: true }
}, { timestamps: true });

export default model('Snippet', SnippetSchema);
