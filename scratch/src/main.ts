import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// 비동기 함수 bootstrap은 애플리케이션 인스턴스를 생성하고 실행합니다.
async function bootstrap() {
  // NestFactory를 사용하여 AppModule 기반으로 애플리케이션 인스턴스를 생성합니다.
  const app = await NestFactory.create(AppModule);

  // 애플리케이션을 3000번 포트에서 리스닝합니다.
  await app.listen(3000);
}

// bootstrap 함수를 호출하여 서버를 시작합니다.
bootstrap();
