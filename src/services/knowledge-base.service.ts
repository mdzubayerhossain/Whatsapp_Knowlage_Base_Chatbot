import { readFileSync } from 'fs';
import { join } from 'path';

export class KnowledgeBaseService {
  private knowledgeBase: string[];

  constructor() {
    this.knowledgeBase = this.loadKnowledgeBase();
  }

  private loadKnowledgeBase(): string[] {
    const filePath = join(__dirname, '../data/knowledge-base.txt');
    const data = readFileSync(filePath, 'utf-8');
    return data.split('\n').filter(line => line.trim() !== '');
  }

  public getResponse(query: string): string {
    const response = this.knowledgeBase.find(entry => entry.toLowerCase().includes(query.toLowerCase()));
    return response || 'Sorry, I could not find any information related to your query.';
  }
}