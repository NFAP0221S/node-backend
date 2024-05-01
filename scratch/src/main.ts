// NestJS 프레임워크의 기본 장식자와 NestFactory를 임포트합니다.
import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// @Controller 장식자는 이 클래스가 요청을 처리하는 컨트롤러임을 지정합니다.
@Controller()
class AppController {
  // @Get() 장식자는 아래 메소드가 GET 요청을 받아 처리하도록 설정합니다.
  // 이 메소드는 루트 URL ('/')에 대한 요청을 받고, '안녕 ㅋㅋ'라는 텍스트를 응답으로 반환합니다.
  @Get()
  getRootRoute() {
    return '안녕 ㅋㅋ';
  }
}

// @Module 장식자는 이 클래스가 NestJS 모듈임을 나타내며, 어플리케이션의 구성 요소를 묶습니다.
@Module({
  // 이 모듈은 AppController를 포함하여 등록된 컨트롤러를 명시합니다.
  controllers: [AppController]
})
class AppModule {}

// 비동기 함수 bootstrap은 애플리케이션 인스턴스를 생성하고 실행합니다.
async function bootstrap() {
  // NestFactory를 사용하여 AppModule 기반으로 애플리케이션 인스턴스를 생성합니다.
  const app = await NestFactory.create(AppModule);

  // 애플리케이션을 3000번 포트에서 리스닝합니다.
  await app.listen(3000);
}

// bootstrap 함수를 호출하여 서버를 시작합니다.
bootstrap();
