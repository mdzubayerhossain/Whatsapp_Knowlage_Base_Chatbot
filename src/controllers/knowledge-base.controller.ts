import { Controller, Get, Post, Body } from '@nestjs/common';
import { KnowledgeBaseService } from '../services/knowledge-base.service';

@Controller('knowledge-base')
export class KnowledgeBaseController {
  constructor(private readonly knowledgeBaseService: KnowledgeBaseService) {}

  @Get()
  async getKnowledgeBase() {
    return await this.knowledgeBaseService.loadKnowledgeBase();
  }

  @Post('query')
  async postQuery(@Body('query') query: string) {
    return await this.knowledgeBaseService.getResponse(query);
  }
}