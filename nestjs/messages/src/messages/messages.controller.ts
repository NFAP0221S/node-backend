import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'listMessages';
  }

  @Post()
  createMessage() {
    return 'createMessage';
  }

  @Get(':id')
  getMessage(id: string) {
    return `message ${id}`;
  }
}
