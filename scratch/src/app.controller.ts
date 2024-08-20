import { Controller, Get } from "@nestjs/common";

// @Controller 장식자는 이 클래스가 요청을 처리하는 컨트롤러임을 지정합니다.
@Controller()
export class AppController {
  // @Get() 장식자는 아래 메소드가 GET 요청을 받아 처리하도록 설정합니다.
  // 이 메소드는 루트 URL ('/')에 대한 요청을 받고, '안녕 ㅋㅋ'라는 텍스트를 응답으로 반환합니다.
  @Get()
  getRootRoute() {
    return '안녕 ㅋㅋ';
  }
}