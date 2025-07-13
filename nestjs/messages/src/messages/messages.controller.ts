import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'listMessages';
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get(':id')
  getMessage(id: string) {
    return `message ${id}`;
  }
}
